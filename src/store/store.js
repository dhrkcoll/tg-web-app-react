import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productsSlice.js";
import locationReducer from "./locationSlice.js";
import paymentReducer from "./paymentSlice.js";

export default configureStore({
  reducer: {
    location: locationReducer,
    cart: cartReducer,
    products: productsReducer,
    payment: paymentReducer,
  },
});
