import { IncomeData } from '../../interfaces/incomeData';
import { sortDataByBrand } from '../../utils/sort_data_by_brand';
import { sortDataByCategory } from '../../utils/sort_data_by_category';
import { renderProductsPresent } from '../products-present/products-present';
import { renderSideBar } from '../side_bar/side_bar';
import './main.scss';

export function renderMainContent(targetNode: HTMLElement, obj: IncomeData): void {
    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('wrapper', 'wrapper__main');

    sortDataByBrand(obj);
    sortDataByCategory(obj);
    renderSideBar(wrapper);

    renderProductsPresent(obj.products, wrapper);

    targetNode.append(wrapper);
}

export function renderMain(targetNode: HTMLElement | DocumentFragment): void {
    const main: HTMLElement = document.createElement('main');
    main.classList.add('main');

    targetNode.append(main);
}
