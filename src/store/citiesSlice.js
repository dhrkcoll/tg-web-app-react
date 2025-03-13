import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [
    {
      id: 1,
      name: "Зилаир",
      streets: [
        { id: 1, name: "Ленина" },
        { id: 2, name: "Салавата Юлаева" },
      ],
    },
    {
      id: 2,
      name: "Москва",
      streets: [
        { id: 3, name: "Тверская" },
        { id: 4, name: "Арбат" },
      ],
    },
    {
      id: 3,
      name: "Санкт-Петербург",
      streets: [
        { id: 5, name: "Невский проспект" },
        { id: 6, name: "Лиговский проспект" },
      ],
    },
    {
      id: 4,
      name: "Новосибирск",
      streets: [{ id: 7, name: "Красный проспект" }],
    },
  ],
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
});

export default citiesSlice.reducer;
