import { IncomeData } from "../interfaces/index";
import { ProductData } from "../interfaces/productData";

export let renderList:ProductData[] = [];

export function getSortItemsByCategory(data:IncomeData, evt: string): void {
const newData = data.products.filter((el:ProductData) => el.category === evt)
newData.forEach((el:ProductData) => renderList.push(el))
console.log(renderList)
};

export function getSortItemsByBrand(data:IncomeData, evt: string): void {
const newData = data.products.filter((el:ProductData) => el.brand === evt)
newData.forEach((el:ProductData) => renderList.push(el))
console.log(renderList)
};



export function getSortItemsByPrice(data: IncomeData, field: 'price'|'rating'|'discountPercentage'): void {
    const newData = data.products.sort(function (x: ProductData, y: ProductData): number {
        if (x[field] < y[field]) {
        return -1;
        } else {
        return 1
        }
    });
    console.log(newData);
};
