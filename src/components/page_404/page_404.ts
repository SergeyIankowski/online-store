import { clearPage } from '../../utils/clear_page'
import './page_404.scss'

export function renderPage404 (targetNode: HTMLElement | DocumentFragment): void {
    clearPage(targetNode);

    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('container');

    const content: HTMLDivElement = document.createElement('div');
    content.classList.add('content');

    const h1: HTMLElement = document.createElement('h1');
    h1.classList.add('text');
    h1.textContent = '404 PAGE NOT FOUND'

    content.append(h1);
    container.append(content);
    targetNode.append(container);
}
