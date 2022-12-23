import './side_bar.scss';

export const category: Set<string> = new Set();
export const brand: Set<string> = new Set();

export function renderSideBar(): void {
    const main = <HTMLElement>document.querySelector('.main');

    const container: HTMLElement = document.createElement('div');
    container.classList.add('side_bar__container', 'container');

    const bntsContainer: HTMLElement = document.createElement('div');
    bntsContainer.classList.add('buttons_container', 'container');
    const btnReset: HTMLElement = document.createElement('button');
    btnReset.classList.add('reset_btn', 'btn');
    btnReset.textContent = 'Reset';
    bntsContainer.append(btnReset);

    const categoryContainer: HTMLElement = document.createElement('div');
    categoryContainer.classList.add('category__container', 'container');
    const categoryUnorderedList: HTMLElement = document.createElement('ul');
    categoryUnorderedList.classList.add('category_list');
    for (const el of category) {
        const div: HTMLElement = document.createElement('div');
        div.classList.add('checkbox_container');
        const label: HTMLElement = document.createElement('label');
        const checkbox: HTMLElement = document.createElement('input');
        label.textContent = el;
        label.setAttribute('for', el);
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', el);
        div.append(checkbox, label);
        categoryUnorderedList.append(div);
    }
    categoryContainer.append(categoryUnorderedList);

    const brandContainer: HTMLElement = document.createElement('div');
    brandContainer.classList.add('category__container', 'container');
    const brandUnorderedList: HTMLElement = document.createElement('ul');
    brandUnorderedList.classList.add('category_list');

    for (const el of brand) {
        const div: HTMLElement = document.createElement('div');
        div.classList.add('checkbox_container');
        const label: HTMLElement = document.createElement('label');
        const checkbox: HTMLElement = document.createElement('input');
        label.textContent = el;
        label.setAttribute('for', el);
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', el);
        div.append(checkbox, label);
        brandUnorderedList.append(div);
    }
    brandContainer.append(brandUnorderedList);
    container.append(bntsContainer, categoryContainer, brandContainer);
    main.append(container);
}
