import { BasketData } from '../../interfaces/basket_data';
import { ProductData } from '../../interfaces/productData';
import { clearPage } from '../../utils/clear_page';
import { setCountItemsToCartButtonValue, setSummaryPriceToHeader } from '../../utils/setHeaderValuesFromLocalStorage';
import { basket } from '../app/app';
import { renderBasketPopup } from '../basket-popup/basket-popup';
import { renderBasketPage } from '../basket/basket';
import { store } from '../global-store-component/store';
import { renderMainContent } from '../main/main';
import './card-details.scss';

const createBreadCrumpSpan = (key: string, value: string) => {
    const span: HTMLSpanElement = document.createElement('span');
    span.classList.add('breadcrumbs__item', `breadcrumbs__item__${key}`);
    span.innerText = value === 'store' ? 'Online Store' : value;
    return span;
};
const renderImageNode = (path: string, title: string, className: string, callback?: (e: Event) => void) => {
    const imgNode: HTMLImageElement = document.createElement('img');
    imgNode.classList.add(className);
    imgNode.src = path;
    imgNode.alt = `photo ${title}`;
    callback ? (imgNode.onclick = callback) : '';
    return imgNode;
};
const capitalizeString = (str: string) => {
    return str.at(0)?.toUpperCase() + str.slice(1);
};
const renderPresentInfoItem = (key: string, value: string) => {
    const node: HTMLParagraphElement = document.createElement('p');
    node.classList.add('present-info__item', `present-info__${key}`);
    node.innerText = `${capitalizeString(key)}: `;
    const nodeSpan: HTMLSpanElement = document.createElement('span');
    nodeSpan.classList.add('present-info__item-value', `present-info__${key}-value`);
    nodeSpan.innerText = value;
    node.append(nodeSpan);
    return node;
};

export function renderCardDetails(targetNode: HTMLElement, obj: ProductData) {
    const cardDetails: HTMLElement = document.createElement('section');
    cardDetails.classList.add('card-details');

    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('wrapper');

    const breadcrumbs: HTMLDivElement = document.createElement('div');
    breadcrumbs.classList.add('card-details__breadcrumbs', 'breadcrumbs');
    const dataFields = {
        store: 'store',
        category: obj.category,
        brand: obj.brand,
        title: obj.title,
    };
    Object.entries(dataFields).forEach((item, index) => {
        const elem = createBreadCrumpSpan(item[0], item[1]);
        if (index !== 3) {
            breadcrumbs.append(elem, '>>');
        } else {
            breadcrumbs.append(elem);
        }
    });

    const infoContainerTitle: HTMLHeadElement = document.createElement('h3');
    infoContainerTitle.classList.add('card-details__title');
    infoContainerTitle.innerText = obj.title;

    const infoContainer: HTMLDivElement = document.createElement('div');
    infoContainer.classList.add('card-details__container', 'info-container');

    const photosContainer: HTMLDivElement = document.createElement('div');
    photosContainer.classList.add('info-container__item', 'photos-container');

    const presentPhotoContainer: HTMLDivElement = document.createElement('div');
    presentPhotoContainer.classList.add('info-container__item', 'present-photo-container');
    const presentPhoto = renderImageNode(obj.thumbnail, obj.title, 'present-photo');
    presentPhotoContainer.append(presentPhoto);

    obj.images.forEach((img) =>
        photosContainer.append(
            renderImageNode(img, obj.title, 'photo-container__image', (e: Event) => {
                const targ = e.target as HTMLImageElement;
                presentPhoto.src = targ.src;
            })
        )
    );

    const presentInfo: HTMLDivElement = document.createElement('div');
    presentInfo.classList.add('info-container__item', 'present-info');
    const presentInfoData = {
        description: obj.description,
        rating: String(obj.rating),
        stock: String(obj.stock),
        brand: obj.brand,
        category: obj.category,
    };
    Object.entries(presentInfoData).forEach((item) => presentInfo.append(renderPresentInfoItem(item[0], item[1])));

    const priceContainer: HTMLDivElement = document.createElement('div');
    priceContainer.classList.add('info-container__item', 'price-container');

    const priceContainerTitle: HTMLHeadElement = document.createElement('div');
    priceContainerTitle.classList.add('price-container__price');

    const spanPriceNew: HTMLSpanElement = document.createElement('span');
    spanPriceNew.classList.add('price-container__price_new');
    spanPriceNew.innerText = `$${Math.floor(obj.price * ((100 - obj.discountPercentage) / 100))}`;

    const spanPriceOld: HTMLSpanElement = document.createElement('span');
    spanPriceOld.classList.add('price-container__price_old');
    spanPriceOld.innerText = `$${obj.price}`;

    priceContainerTitle.append(spanPriceNew, ' / ', spanPriceOld);

    const addButton: HTMLButtonElement = document.createElement('button');
    addButton.classList.add('price-container__button', 'price-container__button-add');
    addButton.innerText = 'Add To Cart';

    const buyButton: HTMLButtonElement = document.createElement('button');
    buyButton.classList.add('price-container__button', 'price-container__button-buy');
    buyButton.innerText = 'Buy';

    priceContainer.append(priceContainerTitle, addButton, buyButton);
    infoContainer.append(photosContainer, presentPhotoContainer, presentInfo, priceContainer);
    wrapper.append(breadcrumbs, infoContainerTitle, infoContainer);
    cardDetails.append(wrapper);

    buyButton.addEventListener('click', () => {
        const main = document.querySelector('.main') as HTMLElement;
        clearPage(main);
        if (localStorage.getItem('basket') !== null) {
            const arrB: BasketData[] = [...JSON.parse(localStorage.getItem('basket')!)];
            renderBasketPage(main, arrB);
        } else {
            renderBasketPage(main, []);
        }
        renderBasketPopup(document.body);
    });
    ///

    const add = () => {
        if (localStorage.getItem('basket') === null) {
            localStorage.setItem('basket', JSON.stringify(basket));
            setSummaryPriceToHeader(document.querySelector('.cart-total__value')!);
            setCountItemsToCartButtonValue(document.querySelector('.cart-button__value')!);
        } else {
            const basketStr = <string>localStorage.getItem('basket');
            const arrA = <BasketData[]>JSON.parse(basketStr);
            if (!basketStr.includes(`"id":${obj.id}`)) {
                const counter: { count: number } = { count: 1 };
                arrA.push(Object.assign(obj, counter));
                localStorage.setItem('basket', JSON.stringify(arrA));
                addButton.innerText = 'Remove';
                addButton.removeEventListener('click', add);
                addButton.addEventListener('click', removeEvt);
            }
            setSummaryPriceToHeader(document.querySelector('.cart-total__value')!);
            setCountItemsToCartButtonValue(document.querySelector('.cart-button__value')!);
        }
    };

    const removeEvt = () => {
        const arrB: BasketData[] = [...JSON.parse(localStorage.getItem('basket')!)];
        arrB.forEach((el: BasketData, i: number) => {
            el.id === obj.id ? arrB.splice(i, 1) : false;
        });
        localStorage.setItem('basket', JSON.stringify(arrB));
        setSummaryPriceToHeader(document.querySelector('.cart-total__value')!);
        setCountItemsToCartButtonValue(document.querySelector('.cart-button__value')!);
        addButton.innerText = 'Add To Cart';
        addButton.removeEventListener('click', removeEvt);
        addButton.addEventListener('click', add);
    };

    function control() {
        if (localStorage.getItem('basket') === null) {
            localStorage.setItem('basket', JSON.stringify(basket));
        } else {
            const basketStr = <string>localStorage.getItem('basket');
            const arrA = <BasketData[]>JSON.parse(basketStr);
            if (basketStr.includes(`"id":${obj.id}`)) {
                localStorage.setItem('basket', JSON.stringify(arrA));
                addButton.innerText = 'Remove';
                addButton.removeEventListener('click', add);
                addButton.addEventListener('click', removeEvt);
            }
        }
    }

    addButton.addEventListener('click', add);
    control();

    ///
    breadcrumbs.querySelector('.breadcrumbs__item__store')!.addEventListener('click', () => {
        cardDetails.remove();
        const main = document.querySelector('.main') as HTMLElement;
        renderMainContent(main, { products: store.sortedCards });
    });

    targetNode.append(cardDetails);
}
