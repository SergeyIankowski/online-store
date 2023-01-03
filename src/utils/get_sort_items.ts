import { IncomeData } from "../interfaces/index";
import { ProductData } from "../interfaces/productData";

export let renderList:ProductData[] = [];

export function getSortItemsByCategory(data:IncomeData, evt: string): void {
    const newData = data.products.filter((el:ProductData) => el.category === evt)
    newData.forEach((el:ProductData) => renderList.push(el))
};

export function getSortItemsByBrand(data:IncomeData, evt: string): void {
    const newData = data.products.filter((el:ProductData) => el.brand === evt)
    newData.forEach((el:ProductData) => renderList.push(el))
};



export function getSortItems(data: IncomeData, field: 'price'|'rating'|'discountPercentage'): void {
    const newData = data.products.sort(function (x: ProductData, y: ProductData): number {
        if (x[field] < y[field]) {
        return -1;
        } else {
        return 1
        }
    });
};

export function getSortItemsReverse(data: IncomeData, field: 'price'|'rating'|'discountPercentage'): void {
    const newData = data.products.sort(function (x: ProductData, y: ProductData): number {
        if (x[field] > y[field]) {
        return -1;
        } else {
        return 1
        }
    });
}
