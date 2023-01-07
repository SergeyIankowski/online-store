import { store } from '../components/global-store-component/store';
import { getSortItems, getSortItemsReverse } from './get_sort_items';

export function sortByPriceASC(): void {
    const initialData = store.getSortedCardsFromStore();
    const sortedData = getSortItems(initialData, 'price');
    store.setCardsToStoreAndRender(sortedData);
}

export function sortByPriceDESC(): void {
    const initialData = store.getSortedCardsFromStore();
    const sortedData = getSortItemsReverse(initialData, 'price');
    store.setCardsToStoreAndRender(sortedData);
}

export function sortByRatingASC(): void {
    const initialData = store.getSortedCardsFromStore();
    const sortedData = getSortItems(initialData, 'rating');
    store.setCardsToStoreAndRender(sortedData);
}
export function sortByRatingDESC(): void {
    const initialData = store.getSortedCardsFromStore();
    const sortedData = getSortItemsReverse(initialData, 'rating');
    store.setCardsToStoreAndRender(sortedData);
}

export function sortByDiscountASC(): void {
    const initialData = store.getSortedCardsFromStore();
    const sortedData = getSortItems(initialData, 'discountPercentage');
    store.setCardsToStoreAndRender(sortedData);
}
export function sortByDiscountDESC(): void {
    const initialData = store.getSortedCardsFromStore();
    const sortedData = getSortItemsReverse(initialData, 'discountPercentage');
    store.setCardsToStoreAndRender(sortedData);
}
