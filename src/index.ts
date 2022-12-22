import { renderSideBar, sortDataByBrand, sortDataByCategory } from "./components/side_bar/side_bar";
import { data } from "./mock_data";

sortDataByCategory(data)
sortDataByBrand(data)
renderSideBar()
console.log("Hello World!");
