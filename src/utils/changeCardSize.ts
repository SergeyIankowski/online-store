import { store } from '../components/global-store-component/store';

export function changeCardSize(isSmall: boolean) {
    const cards = document.querySelectorAll('.store-card');
    store.cardSize = !isSmall;
    cards.forEach((card) =>
        isSmall ? card.classList.remove('store-card_small') : card.classList.add('store-card_small')
    );
}
