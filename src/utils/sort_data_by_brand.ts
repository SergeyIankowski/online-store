import { IncomeData, ProductData } from '../interfaces/index';
import { brand } from '../components/side_bar/side_bar';

export function sortDataByBrand(data: IncomeData): void {
    data.products.forEach((item: ProductData) => brand.add(item.brand));
}
