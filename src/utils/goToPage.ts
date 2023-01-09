// import { IncomeData } from '../interfaces/index';
// import { ProductData } from '../interfaces/productData';

// type Render = {
//     (targetNode: HTMLElement, obj: IncomeData): void;
//     (targetNode: HTMLElement, obj: ProductData): void;
//     (targetNode: HTMLElement, obj: Map<ProductData, number>): void;
// };
// type Go = {
//     (oldPage: HTMLElement, obj: ProductData, renderCallback: Render): void;
//     (oldPage: HTMLElement, obj: IncomeData, renderCallback: Render): void;
//     (oldPage: HTMLElement, obj: Map<ProductData, number>, renderCallback: Render): void;
// };

// export function goToPage(
//     oldPage: HTMLElement,
//     obj: ProductData | IncomeData | Map<ProductData, number>,
//     renderCallback: Render
// ): Go {
//     oldPage.remove();
//     renderCallback(document.querySelector('.main')!, obj);
// }
