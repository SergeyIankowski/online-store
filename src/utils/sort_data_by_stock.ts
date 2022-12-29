import { stock } from "../components/side_bar/slider/slider"
import {IncomeData, ProductData} from "../interfaces/index"

export function sortDataByStock(data: IncomeData): void {
    data.products.forEach((item: ProductData) => stock.push(item.stock))
}
