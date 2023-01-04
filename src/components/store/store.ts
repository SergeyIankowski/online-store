import { ProductData } from '../../interfaces/productData';
import { StoreInterface } from '../../interfaces/storeInterface';
import { data } from '../../mock_data';
import { renderCards } from '../products-board/products-board';

export let store: Store;

export class Store implements StoreInterface {
    initialCards: ProductData[];
    sortedCards: ProductData[];
    boardNode: HTMLElement;
    cardSize: boolean;
    constructor(initialCards: ProductData[], boardNode: HTMLElement) {
        this.initialCards = initialCards;
        this.sortedCards = initialCards;
        this.boardNode = boardNode;
        this.cardSize = false;
    }
    public setCardsToStoreAndRender(cards: ProductData[]): void {
        this.sortedCards = cards;

        while (this.boardNode.firstChild) {
            this.boardNode.removeChild(this.boardNode.firstChild);
        }

        this.renderBoard();
    }
    public getInitialCardsFromStore() {
        return this.initialCards;
    }
    public getSortedCardsFromStore() {
        return this.sortedCards;
    }
    private renderBoard(): void {
        renderCards(this.sortedCards, this.cardSize, this.boardNode);
    }
    static init(node: HTMLElement) {
        store = new Store(data.products, node);
    }
}
