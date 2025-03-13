import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productsSlice.js";
import citiesReducer from "./citiesSlice.js";

export default configureStore({
  reducer: {
    cities: citiesReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});
