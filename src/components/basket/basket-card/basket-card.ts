import { ProductData } from '../../../interfaces/productData';
import './basket-card.scss';

export function renderBasketCard(obj: ProductData, count: number, targetNode: HTMLElement): void {
    const basketCard: HTMLDivElement = document.createElement('div');
    basketCard.classList.add('basket__card-item', 'basket-card');

    const basketCardNumber: HTMLParagraphElement = document.createElement('p');
    basketCardNumber.classList.add('basket-card__number');
    basketCardNumber.innerText = `${obj.id}`;

    const basketCardImage: HTMLImageElement = document.createElement('img');
    basketCardImage.classList.add('basket-card__image');
    basketCardImage.src = obj.thumbnail;
    basketCardImage.alt = `${obj.title} image`;

    const basketCardInfo: HTMLDivElement = document.createElement('div');
    basketCardInfo.classList.add('basket-card__info');

    const basketCardTitle: HTMLParagraphElement = document.createElement('p');
    basketCardTitle.classList.add('backet-card__title');
    basketCardTitle.innerText = obj.title;

    const basketCardDescription: HTMLParagraphElement = document.createElement('p');
    basketCardDescription.classList.add('basket-card__description');
    basketCardDescription.innerText = obj.description;

    const basketCardRating: HTMLParagraphElement = document.createElement('p');
    basketCardRating.classList.add('basket-card__rating');
    basketCardRating.innerText = 'Rating: ';
    const basketCardRatingValue: HTMLSpanElement = document.createElement('span');
    basketCardRatingValue.classList.add('basket-card__rating-value');
    basketCardRatingValue.innerText = `${obj.rating}`;
    basketCardRating.append(basketCardRatingValue);

    const basketCardPrice: HTMLParagraphElement = document.createElement('p');
    basketCardPrice.classList.add('basket-card__price');
    basketCardPrice.innerText = '$';
    const basketCardPriceValue: HTMLSpanElement = document.createElement('span');
    basketCardPriceValue.classList.add('basket-card__price-value');
    basketCardPriceValue.innerText = String(obj.price);
    basketCardPrice.append(basketCardPriceValue);

    const basketCardStock: HTMLParagraphElement = document.createElement('p');
    basketCardStock.classList.add('basket-card__stock', 'basket-card__stock-value');
    basketCardStock.innerText = `Stock: ${obj.stock}`;

    basketCardInfo.append(basketCardTitle, basketCardDescription, basketCardPrice, basketCardRating, basketCardStock);

    const basketCardCountContainer: HTMLDivElement = document.createElement('div');
    basketCardCountContainer.classList.add('backet-card__count-container');

    const lessButton: HTMLButtonElement = document.createElement('button');
    lessButton.classList.add('basket-card__count-button', 'basket-card__count-button_less');
    lessButton.innerText = '-';

    const countInput: HTMLInputElement = document.createElement('input');
    countInput.type = 'text';
    countInput.classList.add('basket-card__count-input');
    countInput.value = `${count}`;

    const moreButton: HTMLButtonElement = document.createElement('button');
    moreButton.innerText = '+';
    moreButton.classList.add('basket-card__count-button', 'basket-card__count-button_more');

    basketCardCountContainer.append(lessButton, countInput, moreButton);

    basketCard.append(basketCardNumber, basketCardImage, basketCardInfo, basketCardCountContainer);

    targetNode.append(basketCard);
}
