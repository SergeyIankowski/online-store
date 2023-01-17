import { ProductData } from './productData';

export interface StoreInterface {
    initialCards: ProductData[];
    sortedCards: ProductData[];
    boardNode: HTMLElement;
    cardSize: boolean;
    setCardsToStoreAndRender(cards: ProductData[]): void;
    getInitialCardsFromStore(): ProductData[];
    getSortedCardsFromStore(): ProductData[];
}
