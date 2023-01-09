import { renderFooter } from '../footer/footer';
import { renderHeader } from '../header/header';
import { renderMain } from '../main/main';
import { Store } from '../global-store-component/store';
import './app.scss';
import { BasketData } from '../../interfaces/basket_data';
// import { basket } from '../store-card/storeCard';


export let basket: BasketData[] = new Array();
export let idList: number[] = new Array();

export function renderApp(targetNode: HTMLElement): void {
    const app: HTMLDivElement = document.createElement('div');
    app.classList.add('app');

    renderHeader(app);
    renderMain(app);
    renderFooter(app);

    Store.init(app.querySelector('.products-board')!);

    targetNode.append(app);
    if (localStorage.getItem('basket') === null) {
            localStorage.setItem('basket', JSON.stringify(basket))
        }
    basket = JSON.parse(localStorage.getItem('basket')!)
    basket.forEach((el: BasketData) => idList.push(el.id));
    console.log(idList)
}
