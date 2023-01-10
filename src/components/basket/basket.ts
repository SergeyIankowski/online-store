import { BasketData } from '../../interfaces/basket_data';
import { renderBasketCard } from './basket-card/basket-card';
import { renderSummary } from './basket-summary/basket-summary';
import './basket.scss';

export function renderBasketPage(targetNode: HTMLElement, data: BasketData[]) {
    const basket: HTMLElement = document.createElement('section');
    basket.classList.add('basket');

    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('wrapper');

    const count = data.reduce((sum, item) => sum + item.count, 0);
    const total = data.reduce((sum, item) => sum + item.count * Math.floor(item.price * (100 - item.discountPercentage) / 100), 0);

    const basketContainer: HTMLDivElement = document.createElement('div');
    basketContainer.classList.add('basket__cards-container', 'cards-container');
    data.forEach((item) => renderBasketCard(item, basketContainer));

    wrapper.append(basketContainer);
    renderSummary(count, total, wrapper);

    basket.append(wrapper);
    targetNode.append(basket);
}
