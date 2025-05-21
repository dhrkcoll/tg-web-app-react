// store/shops/shopsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [
    {
      id: 1,
      name: "Зилаир",
      streets: [
        { id: 1, street: "Ленина", house: 25 },
        { id: 2, street: "Салавата Юлаева", house: 28 },
      ],
    },
    {
      id: 2,
      name: "Москва",
      streets: [
        { id: 3, street: "Тверская", house: 52 },
        { id: 4, street: "Арбат", house: 21 },
      ],
    },
    {
      id: 3,
      name: "Санкт-Петербург",
      streets: [
        { id: 5, street: "Невский проспект", house: 12 },
        { id: 6, street: "Лиговский проспект", house: 56 },
      ],
    },
    {
      id: 4,
      name: "Новосибирск",
      streets: [{ id: 7, street: "Красный проспект", house: 21 }],
    },
  ],
  loading: false,
  error: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
});

export default shopsSlice.reducer;
