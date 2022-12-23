import Bag from '../../assets/img/bag-icon.svg';
import Cart from '../../assets/img/cart-icon.svg';
import './header.scss';

export function renderHeader(targetNode: HTMLElement): void {
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
    cartTotalValue.innerText = `${0}`;

    const cartButtonContainer: HTMLElement = document.createElement('div');
    cartButtonContainer.classList.add('cart-button');

    const cartButtonIcon: HTMLImageElement = document.createElement('img');
    cartButtonIcon.classList.add('cart-button__icon');
    cartButtonIcon.src = Cart;
    cartButtonIcon.alt = 'cart icon';

    const cartButtonValue: HTMLElement = document.createElement('div');
    cartButtonValue.classList.add('cart-button__value');
    cartButtonValue.innerText = `${17}`;

    logoContainer.append(logoImage, logoDescription);
    cartTotal.append(cartTotalValue);
    cartButtonContainer.append(cartButtonIcon, cartButtonValue);
    wrapper.append(logoContainer, cartTotal, cartButtonContainer);
    header.append(wrapper);

    targetNode.append(header);
}
