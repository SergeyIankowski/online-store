import { store } from '../components/global-store-component/store';
import { searchDataItems } from './searchItems';

export const findCards = (e: Event) => {
    const targ = e.target as HTMLInputElement;
    console.log(typeof targ.value);
    if (!isNaN(+targ.value)) {
        return;
    }
    const initialData = store.getInitialCardsFromStore();
    const foundData = searchDataItems(initialData, targ.value);
    store.setCardsToStoreAndRender(foundData);
};
