import Router from '../../node_modules/vanilla-router/index';

function getCurrentURL() {
    const { host, hostname, href, origin, pathname, port, protocol, search } = window.location;
    console.log('location', window.location.toString());
    console.log('host', host);
    console.log('hostname', hostname);
    console.log('href', href);
    console.log('origin', origin);
    console.log('pathname', pathname);
    console.log('port', port);
    console.log('protocol', protocol);
    console.log('search', search);
    const url = new URL(window.location.toString());
    console.log('URL', url);
    console.log('URLSearchParams', [...url.searchParams.entries()]);
    return pathname;
}
function setLocation() {
    const { pathname, search } = window.location;
    return pathname + search;
}

const router = new Router({
    mode: 'history',
    page404: (path) => {
        console.log(`/ ${path} render 404`);
    },
});

router.add('', () => {
    console.log('Home Page');
    console.log('render home page');
});

router.add('products/(:any)', (name) => console.log(`render card-${name} details`));

router.add('cart', () => console.log('render cart page'));

router.addUriListener();

router.navigateTo(setLocation());
