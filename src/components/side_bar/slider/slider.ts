import { getMaxOfArray } from "../../../utils/get_max_of_arr";
import { getMinOfArray } from "../../../utils/get_min_of_arr";
import { renderPriceSlider } from "./price_slider/price_slider"
import './slider.scss'
import { renderStockSlider } from "./stock_slider/stock_slider";

export const price: Array<number> = new Array;
export const stock: Set<number> = new Set;
const maxPrice: number = getMaxOfArray(price);
const minPrice: number = getMinOfArray(price);

export function renderSlider(): void {
    console.log(maxPrice, minPrice, price)
    renderPriceSlider(60, 10);
    renderStockSlider(90, 20);
};
