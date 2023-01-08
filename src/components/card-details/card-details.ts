import { ProductData } from '../../interfaces/productData';
import './card-details.scss';

const createBreadCrumpSpan = (key: string, value: string) => {
    const span: HTMLSpanElement = document.createElement('span');
    span.classList.add('breadcrumbs__item', `breadcrumbs__item__${key}`);
    span.innerText = value === 'store' ? 'Online Store' : value;
    return span;
};
const renderImageNode = (path: string, title: string, className: string) => {
    const imgNode: HTMLImageElement = document.createElement('img');
    imgNode.classList.add(className);
    imgNode.src = path;
    imgNode.alt = `photo ${title}`;
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

export function renderCardDetails(obj: ProductData, targetNode: HTMLElement) {
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
    obj.images.forEach((img) => photosContainer.append(renderImageNode(img, obj.title, 'photo-container__image')));

    const presentPhotoContainer: HTMLDivElement = document.createElement('div');
    presentPhotoContainer.classList.add('info-container__item', 'present-photo-container');
    presentPhotoContainer.append(renderImageNode(obj.thumbnail, obj.title, 'present-photo'));

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

    const buttonAdd: HTMLButtonElement = document.createElement('button');
    buttonAdd.classList.add('price-container__button', 'price-container__button-add');
    buttonAdd.innerText = 'Add To Card';

    const buttonBuy: HTMLButtonElement = document.createElement('button');
    buttonBuy.classList.add('price-container__button', 'price-container__button-buy');
    buttonBuy.innerText = 'Buy';

    priceContainer.append(priceContainerTitle, buttonAdd, buttonBuy);
    infoContainer.append(photosContainer, presentPhotoContainer, presentInfo, priceContainer);
    wrapper.append(breadcrumbs, infoContainerTitle, infoContainer);
    cardDetails.append(wrapper);
    targetNode.append(cardDetails);
}
