import { BasketData } from '../../../interfaces/basket_data';
import { clearPage } from '../../../utils/clear_page';
import {
    setCountItemsToCartButtonValue,
    setSummaryPriceToHeader,
} from '../../../utils/setHeaderValuesFromLocalStorage';
import { renderBasketPage } from '../basket';
import './basket-card.scss';

export function renderBasketCard(obj: BasketData, targetNode: HTMLElement): void {
    const basketCard: HTMLDivElement = document.createElement('div');
    basketCard.classList.add('basket__card-item', 'basket-card');

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
    basketCardPriceValue.innerText = String(Math.floor((obj.price * (100 - obj.discountPercentage)) / 100));
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

    const countInput: HTMLSpanElement = document.createElement('span');
    countInput.classList.add('basket-card__count-input');
    countInput.innerText = `${obj.count}`;

    const moreButton: HTMLButtonElement = document.createElement('button');
    moreButton.innerText = '+';
    moreButton.classList.add('basket-card__count-button', 'basket-card__count-button_more');

    basketCardCountContainer.append(lessButton, countInput, moreButton);

    basketCard.append(basketCardImage, basketCardInfo, basketCardCountContainer);

    targetNode.append(basketCard);

    moreButton.addEventListener('click', () => {
        const arrA = <BasketData[]>JSON.parse(localStorage.getItem('basket')!);
        arrA.forEach((el: BasketData) => {
            if (el.id === obj.id) {
                el.count++;
                localStorage.setItem('basket', JSON.stringify(arrA));
                countInput.innerText = el.count.toString();

                const main = document.querySelector('.main') as HTMLElement;
                clearPage(main);
                renderBasketPage(main, arrA);
                setSummaryPriceToHeader(document.querySelector('.cart-total__value')!);
                setCountItemsToCartButtonValue(document.querySelector('.cart-button__value')!);
            }
        });
    });

    lessButton.addEventListener('click', () => {
        const arrB = <BasketData[]>JSON.parse(localStorage.getItem('basket')!);
        arrB.forEach((el: BasketData, i: number) => {
            if (el.id === obj.id) {
                if (el.count === 1) {
                    arrB.splice(i, 1);
                    localStorage.setItem('basket', JSON.stringify(arrB));

                    const main = document.querySelector('.main') as HTMLElement;
                    clearPage(main);
                    renderBasketPage(main, arrB);
                    setSummaryPriceToHeader(document.querySelector('.cart-total__value')!);
                    setCountItemsToCartButtonValue(document.querySelector('.cart-button__value')!);
                } else {
                    el.count--;
                    localStorage.setItem('basket', JSON.stringify(arrB));
                    countInput.innerText = el.count.toString();

                    const main = document.querySelector('.main') as HTMLElement;
                    clearPage(main);
                    renderBasketPage(main, arrB);
                    setSummaryPriceToHeader(document.querySelector('.cart-total__value')!);
                    setCountItemsToCartButtonValue(document.querySelector('.cart-button__value')!);
                }
            }
        });
    });
}
