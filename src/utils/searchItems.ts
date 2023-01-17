import { ProductData } from '../interfaces/productData';

export function searchDataItems(data: ProductData[], substring: string): ProductData[] {
    return data.filter((item) => JSON.stringify(item).toLowerCase().includes(substring.toLowerCase()));
}
