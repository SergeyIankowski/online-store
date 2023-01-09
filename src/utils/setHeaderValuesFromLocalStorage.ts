import { BasketData } from '../interfaces/basket_data';

export function setSummaryPriceToHeader(targetNode: HTMLSpanElement) {
    if (localStorage.getItem('basket') !== null) {
        const arrB: BasketData[] = [...JSON.parse(localStorage.getItem('basket')!)];
        let priceValue = 0;
        arrB.forEach((el) => {
            priceValue += el.count * el.price;
        }, 0);
        targetNode.innerText = `$${priceValue}`;
    } else {
        targetNode.innerText = `$${0}`;
    }
}

export function setCountItemsToCartButtonValue(targetNode: HTMLElement) {
    if (localStorage.getItem('basket') !== null) {
        const arrB: BasketData[] = [...JSON.parse(localStorage.getItem('basket')!)];
        let count = 0;
        arrB.forEach((el) => {
            count += el.count;
        }, 0);
        targetNode.innerText = `${count}`;
    } else {
        targetNode.innerText = `${0}`;
    }
}
