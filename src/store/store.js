import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productsSlice.js";
import locationReducer from "./locationSlice.js";

export default configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});
