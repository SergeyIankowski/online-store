// import { renderApp } from './components/app/app';
import './modules/router';
import './sass/main.scss';
import { data } from './mock_data';
import { renderBasketPage } from './components/basket/basket';

// renderApp(document.body);

const map = new Map();

map.set(data.products[0], 1);
map.set(data.products[1], 2);
map.set(data.products[2], 3);
map.set(data.products[3], 25);

renderBasketPage(map, document.body);