import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const findedItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findedItem) {
        findedItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        console.log(item);
        return item.price * item.count + sum;
      }, 0);
    },
    increaseItem(state, action) {
      const findedItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (findedItem) {
        findedItem.count++;
        state.totalPrice += findedItem.price;
      }
    },
    decreaseItem(state, action) {
      const findedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findedItem) {
        if (findedItem.count > 1) {
          findedItem.count--;
          state.totalPrice -= findedItem.price;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
          state.totalPrice -= findedItem.price;
        }
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, clearItems, removeItem, decreaseItem, increaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
