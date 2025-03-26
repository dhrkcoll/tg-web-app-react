import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethod: { id: "1", name: "Наличными" },
  paymentMethods: [
    { id: "1", name: "Наличными" },
    { id: "2", name: "Перевод" },
    { id: "3", name: "Оплата по QR-ссылке" },
    { id: "4", name: "Онлайн" },
  ],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentMethod(state, action) {
      console.log(action.payload);
      state.paymentMethod = action.payload;
    },
  },
});

export const selectPaymentMethods = (state) => state.payment.paymentMethods;
export const { setPaymentMethod } = paymentSlice.actions;
export default paymentSlice.reducer;
