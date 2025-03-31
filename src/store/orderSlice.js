import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  userPhone: "",
  comment: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      const {
        items,
        totalPrice,
        userPhone,
        comment,
        changeAmount,
        quantity,
        desiredTime,
      } = action.payload;
      state.items = items;
      state.totalPrice = totalPrice;
      state.userPhone = userPhone;
      state.comment = comment;
      state.changeAmount = changeAmount;
      state.quantity = quantity;
      state.desiredTime = desiredTime;
    },
    clearOrder: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.userPhone = "";
      state.comment = "";
      state.changeAmount = 0;
      state.quantity = 0;
      state.desiredTime = "";
    },
  },
});

export const { setOrderDetails, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
