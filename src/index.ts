import { renderSlider } from "./components/side_bar/slider/slider";
import { data } from "./mock_data";
import { sortDataByPrice } from "./utils/sort_data_by_price";

console.log("Hello World!");
sortDataByPrice(data);
renderSlider();
