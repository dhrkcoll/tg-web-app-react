import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import productsReducer from "./productsSlice.js";
import locationReducer from "./locationSlice.js";
import paymentReducer from "./paymentSlice.js";
import shopsReduce from "./shopsSlice.js";
import adressesReducer from "./adressesSlice.js";
import userReducer from "./userSlice.js";

export default configureStore({
  reducer: {
    user: userReducer,
    adresses: adressesReducer,
    shops: shopsReduce,
    location: locationReducer,
    cart: cartReducer,
    products: productsReducer,
    payment: paymentReducer,
  },
});
