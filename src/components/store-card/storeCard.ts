import { ProductData } from '../../interfaces/productData';
import './store-card.scss';

export function renderStoreCard(obj: ProductData, isSmall: boolean, targetNode: HTMLElement): void {
    const card: HTMLElement = document.createElement('div');
    card.classList.add(`store-cards__item`, `store-card${isSmall ? '_small' : ''}`);

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

    const category: HTMLParagraphElement = document.createElement('p');
    category.classList.add('store-card__category');
    category.innerText = `${obj.category}`;

    const brand: HTMLParagraphElement = document.createElement('p');
    brand.classList.add('store-card__brand');
    brand.innerText = `${obj.brand}`;

    const buttonsContainer: HTMLElement = document.createElement('div');
    buttonsContainer.classList.add('store-card__buttons-container');

    const createButtonCardNode = (text: string, callback: (e: Event) => void): HTMLButtonElement => {
        const button: HTMLButtonElement = document.createElement('button');
        button.classList.add('store-card__button');
        button.innerText = text;
        button.onclick = (e: MouseEvent) => {
            callback(e);
        };
        return button;
    };
    const addButton = createButtonCardNode('Add', () => {});
    const detailsButton = createButtonCardNode('Details', () => {});
    buttonsContainer.append(addButton, detailsButton);

    card.append(image, head, rating, price, category, brand, buttonsContainer);
    targetNode.append(card);
}
