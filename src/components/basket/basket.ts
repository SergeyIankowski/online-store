import { ProductData } from '../../interfaces/productData';
import { renderBasketCard } from './basket-card/basket-card';
import { renderSummary } from './basket-summary/basket-summary';
import './basket.scss';

export function renderBasketPage(targetNode: HTMLElement, data: Map<ProductData, number>) {
    const basket: HTMLElement = document.createElement('section');
    basket.classList.add('basket');

    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('wrapper');

    const dataEntries = [...data.entries()];

    const count = [...data.values()].reduce((sum, item) => sum + item, 0);
    const total = dataEntries.reduce((sum, item) => sum + item[0].price * item[1], 0);

    const basketContainer: HTMLDivElement = document.createElement('div');
    basketContainer.classList.add('basket__cards-container', 'cards-container');
    dataEntries.forEach((item) => renderBasketCard(item[0], item[1], basketContainer));

    wrapper.append(basketContainer);
    renderSummary(count, total, wrapper);

    basket.append(wrapper);
    targetNode.append(basket);
}
