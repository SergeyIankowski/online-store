import { changeCardSize } from '../../utils/changeCardSize';
import { searchDataItems } from '../../utils/searchItems';
import { store } from '../store/store';
import './sort-and-search.scss';
type CreateOptionNodeArguments = {
    value: string;
    className: string;
    attributes: string[];
    text: string;
};

const createOptionNode = (obj: CreateOptionNodeArguments) => {
    const optionNode: HTMLOptionElement = document.createElement('option');
    optionNode.classList.add(obj.className);
    optionNode.value = obj.value;
    obj.attributes.forEach((attribute) => optionNode.setAttribute(attribute, 'true'));
    optionNode.innerText = obj.text;
    return optionNode;
};

const selectOptions: CreateOptionNodeArguments[] = [
    { value: 'sort-title', className: 'sorting__item', attributes: ['disabled', 'selected'], text: 'Sort options:' },
    { value: 'price-ASC', className: 'sorting__item', attributes: [], text: 'Sort by price ASC' },
    { value: 'sort-title', className: 'sorting__item', attributes: [], text: 'Sort by price DESC' },
    { value: 'sort-title', className: 'sorting__item', attributes: [], text: 'Sort by rating ASC' },
    { value: 'sort-title', className: 'sorting__item', attributes: [], text: 'Sort by rating DESC' },
    { value: 'sort-title', className: 'sorting__item', attributes: [], text: 'Sort by discount ASC' },
    { value: 'sort-title', className: 'sorting__item', attributes: [], text: 'Sort bu discount DESC' },
];

export function renderSortAndSearch(targetNode: HTMLElement) {
    const sortAndSearchContainer: HTMLElement = document.createElement('section');
    sortAndSearchContainer.classList.add('sort-and-search');

    const sorting: HTMLElement = document.createElement('select');
    sorting.classList.add('sort-and-search__sort-menu', 'sorting');
    selectOptions.forEach((item) => sorting.append(createOptionNode(item)));

    const found: HTMLParagraphElement = document.createElement('p');
    found.classList.add('sort-and-search__found', 'found-board');
    found.innerText = 'Found: ';

    const foundValue: HTMLSpanElement = document.createElement('span');
    foundValue.classList.add('found-board__value');
    foundValue.innerText = '0';

    found.append(foundValue);

    const searchInput: HTMLInputElement = document.createElement('input');
    searchInput.type = 'text';
    searchInput.setAttribute('placeholder', 'Search product');
    searchInput.classList.add('sort-and-search__searching', 'search-input');

    const sizesContainer: HTMLElement = document.createElement('div');
    sizesContainer.classList.add('sort-and-search__sizes-container');

    const iconBig: HTMLElement = document.createElement('div');
    iconBig.classList.add(
        'sort-and-search__sizes-image',
        'sort-and-search__sizes-image_big',
        'sort-and-search__sizes-image_colored'
    );
    for (let key = 0; key < 16; key += 1) {
        const cell: HTMLElement = document.createElement('div');
        cell.classList.add('cell');
        iconBig.append(cell);
    }

    const iconSmall: HTMLElement = document.createElement('div');
    iconSmall.classList.add('sort-and-search__sizes-image', 'sort-and-search__sizes-image_small');
    for (let key = 0; key < 64; key += 1) {
        const cell: HTMLElement = document.createElement('div');
        cell.classList.add('cell');
        iconSmall.append(cell);
    }

    iconBig.addEventListener('click', () => {
        changeCardSize(true);
        iconSmall.classList.remove('sort-and-search__sizes-image_colored');
        iconBig.classList.add('sort-and-search__sizes-image_colored');
    });
    iconSmall.addEventListener('click', () => {
        changeCardSize(false);
        iconSmall.classList.add('sort-and-search__sizes-image_colored');
        iconBig.classList.remove('sort-and-search__sizes-image_colored');
    });

    searchInput.oninput = (e) => {
        const foundData = searchDataItems(store.getCardsFromStore(), (e.target as HTMLInputElement).value);
        store.setCardsToStoreAndRender(foundData);
    };

    sizesContainer.append(iconBig, iconSmall);
    sortAndSearchContainer.append(sorting, found, searchInput, sizesContainer);

    targetNode.append(sortAndSearchContainer);
}
