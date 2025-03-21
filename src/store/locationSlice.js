import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { BASE_URL } from "../../env.js";

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async function (endpoint, { rejectWithValue }) {
    try {
      const response = await fetch(`${BASE_URL}/${endpoint}`);

      if (!response.ok) {
        throw new Error("Server Error! Didnt get cities");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      rejectWithValue("Error", error);
    }
  }
);

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
  selectedCity: {
    id: 1,
    name: "Зилаир",
    streets: [
      { id: 1, street: "Ленина", apartment: 25 },
      { id: 2, street: "Салавата Юлаева", apartment: 28 },
    ],
  },
  selectedAdress: {},
  deliveryMethod: "",
  deliveryAdresses: [],
  loading: false,
  error: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    selectCity(state, action) {
      state.selectedCity = action.payload;
    },
    selectAdress(state, action) {
      console.log(action.payload);
      state.selectedAdress = action.payload;
    },
    setDeliveryMethod(state, action) {
      state.deliveryMethod = action.payload;
    },
    addDeliveryAdress(state, action) {
      state.deliveryAdresses.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
        state.error = null;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectStreetByCity = createSelector(
  (state) => state.loacation,
  (state) => state.selectedCity,
  (loacation, selectedCity) => {
    if (!selectedCity) return [];
    const city = loacation.find((city) => city.id === selectedCity);
    return city ? city.streets : [];
  }
);
export const {
  selectCity,
  selectAdress,
  setDeliveryMethod,
  addDeliveryAdress,
} = locationSlice.actions;
export default locationSlice.reducer;
