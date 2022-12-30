export function changeCardSize(isSmall: boolean) {
    const cards = document.querySelectorAll('.store-card');
    cards.forEach((card) =>
        isSmall ? card.classList.remove('store-card_small') : card.classList.add('store-card_small')
    );
}
