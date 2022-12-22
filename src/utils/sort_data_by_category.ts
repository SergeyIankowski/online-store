import {IncomeData, ProductData} from "../interfaces/index"
import { category } from "../components/side_bar/side_bar"


export function sortDataByCategory(data: IncomeData): void {
    data.products.forEach((item: ProductData) => category.add(item.category))
}