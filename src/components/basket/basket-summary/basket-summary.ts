import './basket-summary.scss';

export function renderSummary(count: number, totalPrice: number, targetNode: HTMLElement): void {
    const summary: HTMLDivElement = document.createElement('div');
    summary.classList.add('basket__summary', 'summary');

    const summaryHead: HTMLHeadElement = document.createElement('h3');
    summaryHead.classList.add('summary__title');
    summaryHead.innerText = 'Summary';

    const summaryProductsCount: HTMLParagraphElement = document.createElement('p');
    const summaryProductsCountValue: HTMLSpanElement = document.createElement('span');
    summaryProductsCount.classList.add('summary__products-count');
    summaryProductsCountValue.classList.add('summary__products-count_value');
    summaryProductsCount.innerText = 'Products: ';
    summaryProductsCountValue.innerText = String(count);
    summaryProductsCount.append(summaryProductsCountValue);

    const summaryTotal: HTMLParagraphElement = document.createElement('p');
    const summaryTotalValue: HTMLSpanElement = document.createElement('span');
    summaryTotal.classList.add('summary__total');
    summaryTotalValue.classList.add('summary__total-value');
    summaryTotal.innerText = 'Total: $';
    summaryTotalValue.innerText = String(totalPrice);
    summaryTotal.append(summaryTotalValue);

    const summaryPromoInput: HTMLInputElement = document.createElement('input');
    summaryPromoInput.classList.add('summary__promo');
    summaryPromoInput.type = 'text';

    const summaryPromoCaption: HTMLParagraphElement = document.createElement('p');
    summaryPromoCaption.classList.add('summary__promo-caption');
    summaryPromoCaption.innerText = "Promo for test: 'RS', 'EPM'";

    const summaryButton: HTMLButtonElement = document.createElement('button');
    summaryButton.classList.add('summary__button');
    summaryButton.innerText = 'BUY NOW';

    summary.append(summaryHead, summaryProductsCount, summaryTotal, summaryPromoInput, summaryPromoCaption, summaryButton);
    targetNode.append(summary);
}
