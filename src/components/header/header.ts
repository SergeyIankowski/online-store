import Bag from '../../assets/img/bag-icon.svg';
import Cart from '../../assets/img/cart-icon.svg';
import { BasketData } from '../../interfaces/basket_data';
import { router } from '../../modules/router';
import { clearPage } from '../../utils/clear_page';
import { setCountItemsToCartButtonValue, setSummaryPriceToHeader } from '../../utils/setHeaderValuesFromLocalStorage';
import { renderBasketPage } from '../basket/basket';
import { store } from '../global-store-component/store';
import { renderMainContent } from '../main/main';
import './header.scss';

export function renderHeader(targetNode: HTMLElement | DocumentFragment): void {
    const header: HTMLElement = document.createElement('header');
    header.classList.add('header');

    const wrapper: HTMLElement = document.createElement('div');
    wrapper.classList.add('wrapper');

    const logoContainer: HTMLElement = document.createElement('div');
    logoContainer.classList.add('logo');

    const logoImage: HTMLImageElement = document.createElement('img');
    logoImage.classList.add('logo__icon');
    logoImage.src = Bag;
    logoImage.alt = 'bag';

    const logoDescription: HTMLElement = document.createElement('h1');
    logoDescription.classList.add('logo__description');
    logoDescription.innerText = 'Online Store';

    const cartTotal: HTMLElement = document.createElement('div');
    cartTotal.classList.add('cart-total');
    cartTotal.innerText = 'Cart total: ';

    const cartTotalValue: HTMLElement = document.createElement('span');
    cartTotalValue.classList.add('cart-total__value');
    setSummaryPriceToHeader(cartTotalValue);

    const cartButtonContainer: HTMLElement = document.createElement('div');
    cartButtonContainer.classList.add('cart-button');

    const cartButtonIcon: HTMLImageElement = document.createElement('img');
    cartButtonIcon.classList.add('cart-button__icon');
    cartButtonIcon.src = Cart;
    cartButtonIcon.alt = 'cart icon';

    const cartButtonValue: HTMLElement = document.createElement('div');
    cartButtonValue.classList.add('cart-button__value');
    setCountItemsToCartButtonValue(cartButtonValue);

    logoContainer.append(logoImage, logoDescription);
    cartTotal.append(cartTotalValue);
    cartButtonContainer.append(cartButtonIcon, cartButtonValue);
    wrapper.append(logoContainer, cartTotal, cartButtonContainer);
    header.append(wrapper);

    logoContainer.addEventListener('click', () => {
        const main = document.querySelector('.main') as HTMLElement;
        clearPage(main);
        renderMainContent(main, { products: store.getSortedCardsFromStore() });
        router.navigateTo('/');
    });
    cartButtonContainer.addEventListener('click', () => {
        const main = document.querySelector('.main') as HTMLElement;
        clearPage(main);
        if (localStorage.getItem('basket') !== null) {
            const arrB: BasketData[] = [...JSON.parse(localStorage.getItem('basket')!)];
            renderBasketPage(main, arrB);
        } else {
            renderBasketPage(main, []);
        }
        router.navigateTo('/cart');
    });
    targetNode.append(header);
}
