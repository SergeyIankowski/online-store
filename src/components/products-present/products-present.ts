import { ProductData } from '../../interfaces/productData';
import { renderProductsBoard } from '../products-board/products-board';
import { renderSortAndSearch } from '../sort-and-search/sort-and-search';
import './products-present.scss';

export function renderProductsPresent(data: ProductData[], targetNode: HTMLElement) {
    const productsPresent: HTMLElement = document.createElement('section');
    productsPresent.classList.add('products-present-board');

    renderSortAndSearch(productsPresent);
    renderProductsBoard(data, false, productsPresent);

    targetNode.append(productsPresent);
}
