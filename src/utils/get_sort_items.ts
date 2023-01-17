import { IncomeData } from '../interfaces/index';
import { ProductData } from '../interfaces/productData';

export function getSortItemsByCategory(data: IncomeData, evt: string): ProductData[] {
    return data.products.filter((el: ProductData) => el.category === evt);
}

export function getSortItemsByBrand(data: IncomeData, evt: string): ProductData[] {
    return data.products.filter((el: ProductData) => el.brand === evt);
}

export function getSortItems(data: ProductData[], field: 'price' | 'rating' | 'discountPercentage'): ProductData[] {
    return data.sort((x: ProductData, y: ProductData): number => x[field] - y[field]);
}

export function getSortItemsReverse(
    data: ProductData[],
    field: 'price' | 'rating' | 'discountPercentage'
): ProductData[] {
    return data.sort((x: ProductData, y: ProductData): number => y[field] - x[field]);
}
