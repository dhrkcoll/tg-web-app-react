import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedAddresses: [],
};

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    addAddress(state, action) {
      const newAddress = action.payload;
      const exists = state.savedAddresses.some(
        (addr) => addr.formattedAddress === newAddress.formattedAddress
      );
      if (!exists) state.savedAddresses.push(newAddress);
    },
    removeAddress(state, action) {
      state.savedAddresses = state.savedAddresses.filter(
        (addr) => addr.id !== action.payload
      );
    },
  },
});

export const { addAddress, removeAddress } = addressesSlice.actions;
export default addressesSlice.reducer;
