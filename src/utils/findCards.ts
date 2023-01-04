import { store } from "../components/store/store";
import { searchDataItems } from "./searchItems";

export const findCards = (e: Event) => {
  const initialData = store.getCardsFromStore();
  const foundData = searchDataItems(initialData, (e.target as HTMLInputElement).value);
  store.setCardsToStoreAndRender(foundData);
}