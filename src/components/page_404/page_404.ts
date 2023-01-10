import { clearPage } from '../../utils/clear_page';
import './page_404.scss';

export function renderPage404(targetNode: HTMLElement): void {
    clearPage(targetNode);

    const container: HTMLDivElement = document.createElement('div');
    container.classList.add('container-page-404');

    const wrapper: HTMLDivElement = document.createElement('div');
    wrapper.classList.add('wrapper');

    const h1: HTMLElement = document.createElement('h1');
    h1.classList.add('text');
    h1.textContent = '404 PAGE NOT FOUND';

    wrapper.append(h1);
    container.append(wrapper);
    targetNode.append(container);
}
