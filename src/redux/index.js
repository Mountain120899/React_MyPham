import { combineReducers, createStore } from "redux";

import allProduct from "./allProduct";
import currentProduct from "./currentProduct";
import currentCategory from "./currentCategory";
import cartProducts from "./cartProducts";

const reducer = combineReducers({
    currentCategory,
    allProduct,
    currentProduct,
    cartProducts
});

export default createStore(reducer);