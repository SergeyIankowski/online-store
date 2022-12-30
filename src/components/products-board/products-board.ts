import { ProductData } from '../../interfaces/productData';
import { renderStoreCard } from '../store-card/storeCard';
import './products-board.scss';

export function renderProductsBoard(data: ProductData[], cardIsSmall: boolean, targetNode: HTMLElement): void {
    const board: HTMLDivElement = document.createElement('div');
    board.classList.add('products-board');

    data.forEach((product) => renderStoreCard(product, cardIsSmall, board));
    targetNode.append(board);
}
