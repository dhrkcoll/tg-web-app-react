import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentMethod: "",
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
  reducers: {},
});

export const selectPaymentMethods = (state) => state.payment.paymentMethods;
export default paymentSlice.reducer;
