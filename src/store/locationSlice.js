import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

const initialState = {
  selectedCity: {
    id: 1,
    name: "Зилаир",
    streets: [
      { id: 1, street: "Ленина", house: 25 },
      { id: 2, street: "Салавата Юлаева", house: 28 },
    ],
  },
  selectedAddress: null,
  deliveryMethod: "pickup", // "pickup" или "delivery"
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    selectCity(state, action) {
      state.selectedCity = action.payload;
    },
    selectAddress(state, action) {
      console.log(action.payload);
      state.selectedAddress = action.payload;
    },
    setDeliveryMethod(state, action) {
      state.deliveryMethod = action.payload;
    },
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
  selectAddress,
  setDeliveryMethod,
  addDeliveryAdress,
} = locationSlice.actions;
export default locationSlice.reducer;
