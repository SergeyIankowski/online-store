import { ProductData } from '../../interfaces/productData';
import { clearPage } from '../../utils/clear_page';
import { renderCardDetails } from '../card-details/card-details';
import './store-card.scss';
import { basket } from '../app/app';
import { BasketData } from '../../interfaces/basket_data';
import { setCountItemsToCartButtonValue, setSummaryPriceToHeader } from '../../utils/setHeaderValuesFromLocalStorage';
import { router } from '../../modules/router';

export function renderStoreCard(obj: ProductData, isSmall: boolean, targetNode: HTMLElement): void {
    const card: HTMLElement = document.createElement('div');
    card.classList.add(`store-cards__item`, 'store-card', `store-card${isSmall ? '_small' : ''}`);

    const image: HTMLImageElement = document.createElement('img');
    image.classList.add('store-card__img');
    image.src = obj.thumbnail;
    image.alt = obj.title;

    const head: HTMLHeadElement = document.createElement('h3');
    head.classList.add('store-card__title');
    head.innerText = obj.title;

    const rating: HTMLParagraphElement = document.createElement('p');
    rating.classList.add('store-card__rating');
    rating.innerText = `Rate: ${obj.rating}`;

    const oldPrice: HTMLSpanElement = document.createElement('span');
    oldPrice.classList.add('store-card__old-price');
    oldPrice.innerText = `${obj.price}$`;

    const price: HTMLParagraphElement = document.createElement('p');
    price.classList.add('store-card__price');
    const discountedPriceValue = Math.floor((obj.price * (100 - obj.discountPercentage)) / 100);
    price.innerText = `${discountedPriceValue}$ / `;
    price.append(oldPrice);

    const discount: HTMLElement = document.createElement('p');
    discount.classList.add('store-card__price');
    discount.innerText = `Discount: ${obj.discountPercentage}%`;

    const category: HTMLParagraphElement = document.createElement('p');
    category.classList.add('store-card__category');
    category.innerText = `${obj.category}`;

    const brand: HTMLParagraphElement = document.createElement('p');
    brand.classList.add('store-card__brand');
    brand.innerText = `${obj.brand}`;

    const buttonsContainer: HTMLElement = document.createElement('div');
    buttonsContainer.classList.add('store-card__buttons-container');

    const createButtonCardNode = (text: string, callback: (e: Event) => void, id: number): HTMLButtonElement => {
        const button: HTMLButtonElement = document.createElement('button');
        const newId: number | string = id;
        button.classList.add('store-card__button');
        button.classList.add(text);
        button.setAttribute('data-id', newId.toString());
        button.innerText = text;
        button.onclick = (e: MouseEvent) => {
            callback(e);
        };
        return button;
    };
    const addButton = createButtonCardNode('Add', () => {}, obj.id);
    const detailsButton = createButtonCardNode('Details', () => {}, obj.id);
    buttonsContainer.append(addButton, detailsButton);

    card.append(image, head, rating, price, discount, category, brand, buttonsContainer);
    targetNode.append(card);

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
        addButton.innerText = 'Add';
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
    detailsButton.addEventListener('click', () => {
        const main = document.querySelector('.main') as HTMLElement;
        clearPage(main);
        renderCardDetails(main, obj);
        router.navigateTo(`details/${obj.id}`);
    });
}
