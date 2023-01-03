import { renderFooter } from '../footer/footer';
import { renderHeader } from '../header/header';
import { renderMain } from '../main/main';
import './app.scss';

export function renderApp(targetNode: HTMLElement): void {
    const app: HTMLDivElement = document.createElement('div');
    app.classList.add('app');

    renderHeader(app);
    renderMain(app);
    renderFooter(app);

    targetNode.append(app);
}
