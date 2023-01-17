import { IncomeData } from '../../interfaces/index';
import { ProductData } from '../../interfaces/productData';
import { StoreInterface } from '../../interfaces/storeInterface';
import { renderMainContent } from '../main/main';
import { renderCards } from '../products-board/products-board';
import Loader from './loader';

export let store: Store;

export class Store extends Loader implements StoreInterface {
    initialCards: ProductData[];
    sortedCards: ProductData[];
    boardNode: HTMLElement;
    cardSize: boolean;
    constructor(boardNode: HTMLElement, baseLink: string) {
        super(baseLink);
        this.initialCards = [];
        this.sortedCards = [];
        this.boardNode = boardNode;
        this.cardSize = false;
        super.getRespDataFromURL('GET', '', (data: IncomeData) => {
            this.initialCards = data.products;
            this.sortedCards = data.products;
            renderMainContent(document.querySelector('.main')!, { products: this.initialCards });
        });
    }
    public setCardsToStoreAndRender(cards: ProductData[]): void {
        this.sortedCards = cards;
        this.boardNode = document.querySelector('.products-board')!;

        while (this.boardNode.firstChild) {
            this.boardNode.removeChild(this.boardNode.firstChild);
        }
        const foundBoard: HTMLElement = document.querySelector('.found-board__value')!;
        foundBoard.innerText = `${cards.length}`;
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
        store = new Store(node, 'https://dummyjson.com/products?limit=100');
    }
}
