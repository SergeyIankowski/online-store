import { data } from '../../mock_data';
import { sortDataByBrand } from '../../utils/sort_data_by_brand';
import { sortDataByCategory } from '../../utils/sort_data_by_category';
import { renderProductsPresent } from '../products-present/products-present';
import { renderSideBar } from '../side_bar/side_bar';
import './main.scss';

export function renderMain(targetNode: HTMLElement | DocumentFragment): void {
    const main: HTMLElement = document.createElement('main');
    main.classList.add('main');

    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('wrapper');

    sortDataByBrand(data);
    sortDataByCategory(data);
    renderSideBar(wrapper);

    renderProductsPresent(data.products, wrapper);

    main.append(wrapper);
    targetNode.append(main);
}
