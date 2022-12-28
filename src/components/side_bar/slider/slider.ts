import { getMaxOfArray } from "../../../utils/get_max_of_arr";
import { getMinOfArray } from "../../../utils/get_min_of_arr";
import { renderCustomSlider } from "./custom_slider/custom_slider"
import './slider.scss'

export const price: Array<number> = new Array;
export const stock: Array<number> = new Array;


export function renderSlider(): void {
    const maxPrice: number = getMaxOfArray(price);
    const minPrice: number = getMinOfArray(price);
    const maxStock: number = getMaxOfArray(stock);
    const minStock: number = getMinOfArray(stock);
    renderCustomSlider(maxPrice, minPrice, 'Price');
    renderCustomSlider(maxStock, minStock, 'Stock');
};
