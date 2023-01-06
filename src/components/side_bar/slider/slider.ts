import { data } from '../../../mock_data';
import { getMaxOfArray } from '../../../utils/get_max_of_arr';
import { getMinOfArray } from '../../../utils/get_min_of_arr';
import { sortDataByPrice } from '../../../utils/sort_data_by_price';
import { sortDataByStock } from '../../../utils/sort_data_by_stock';
import { renderCustomSlider } from './custom_slider/render_custom_slider';
import './slider.scss';

export const price: Array<number> = new Array();
export const stock: Array<number> = new Array();

export function renderSlider(targetNode: HTMLElement): void {
    sortDataByPrice(data);
    sortDataByStock(data);
    const maxPrice: number = getMaxOfArray(price);
    const minPrice: number = getMinOfArray(price);
    const maxStock: number = getMaxOfArray(stock);
    const minStock: number = getMinOfArray(stock);
    renderCustomSlider(maxPrice, minPrice, 'Price', targetNode);
    renderCustomSlider(maxStock, minStock, 'Stock', targetNode);
}
