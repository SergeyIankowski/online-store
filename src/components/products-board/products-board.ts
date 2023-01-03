import { ProductData } from '../../interfaces/productData';
import { renderStoreCard } from '../store-card/storeCard';
import './products-board.scss';

export function renderCards(data: ProductData[], cardIsSmall: boolean, targetNode: HTMLElement): void {
    data.forEach((product) => renderStoreCard(product, cardIsSmall, targetNode));
}

export function renderProductsBoard(data: ProductData[], cardIsSmall: boolean, targetNode: HTMLElement): void {
    const board: HTMLDivElement = document.createElement('div');
    board.classList.add('products-board');

    renderCards(data, cardIsSmall, board);

    targetNode.append(board);
}
