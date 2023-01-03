import { price } from '../components/side_bar/slider/slider';
import { IncomeData, ProductData } from '../interfaces/index';

export function sortDataByPrice(data: IncomeData): void {
    data.products.forEach((item: ProductData) => price.push(item.price));
}
