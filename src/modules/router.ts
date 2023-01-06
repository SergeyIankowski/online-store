import Router from '../../node_modules/vanilla-router/index';

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
