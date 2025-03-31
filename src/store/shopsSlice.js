// store/shops/shopsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../env.js";

// export const fetchCitiesWithShops = createAsyncThunk(
//   "shops/fetchCitiesWithShops",
//   async (endpoint, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${BASE_URL}/${endpoint}`);
//       if (!response.ok) throw new Error("Server Error!");
//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
        { id: 3, street: "Тверская" },
        { id: 4, street: "Арбат" },
      ],
    },
    {
      id: 3,
      name: "Санкт-Петербург",
      streets: [
        { id: 5, street: "Невский проспект" },
        { id: 6, street: "Лиговский проспект" },
      ],
    },
    {
      id: 4,
      name: "Новосибирск",
      streets: [{ id: 7, street: "Красный проспект" }],
    },
  ],
  loading: false,
  error: null,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchCitiesWithShops.pending, (state) => {
  //         state.loading = true;
  //         state.error = null;
  //       })
  //       .addCase(fetchCitiesWithShops.fulfilled, (state, action) => {
  //         state.loading = false;
  //         state.cities = action.payload;
  //       })
  //       .addCase(fetchCitiesWithShops.rejected, (state, action) => {
  //         state.loading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

export default shopsSlice.reducer;
