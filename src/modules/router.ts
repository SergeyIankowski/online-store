import Router from '../../node_modules/vanilla-router/index';
import { renderBasketPage } from '../components/basket/basket';
import { renderPage404 } from '../components/page_404/page_404';
import { BasketData } from '../interfaces/basket_data';
import { clearPage } from '../utils/clear_page';

function setLocation() {
    const { pathname, search } = window.location;
    return pathname + search;
}

export const router = new Router({
    mode: 'history',
    page404: () => {
        const delay = () =>
            setTimeout(() => {
                const main: HTMLElement = document.querySelector('.main')!;
                renderPage404(main);
            }, 400);

        if (document.readyState == 'complete') {
            delay();
        } else {
            document.onreadystatechange = function () {
                if (document.readyState === 'complete') {
                    delay();
                }
            };
        }
    },
});

router.add('', () => {});

router.add('details/{name}', () => {});

router.add('cart', () => {
    const delay = () =>
        setTimeout(() => {
            const main: HTMLElement = document.querySelector('.main')!;
            clearPage(main);
            if (localStorage.getItem('basket') !== null) {
                const arrB: BasketData[] = [...JSON.parse(localStorage.getItem('basket')!)];
                renderBasketPage(main, arrB);
            } else {
                renderBasketPage(main, []);
            }
        }, 400);

    if (document.readyState == 'complete') {
        delay();
    } else {
        document.onreadystatechange = function () {
            if (document.readyState === 'complete') {
                delay();
            }
        };
    }
});

router.addUriListener();

router.navigateTo(setLocation());
