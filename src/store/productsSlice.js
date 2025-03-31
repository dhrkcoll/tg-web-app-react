import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async function (storeId, { rejectWithValue }) {
    try {
      const response = await fetch(
        `http://localhost:5000/stores/${storeId}/products`
      );

      if (!response.ok) {
        throw new Error(`Не удалось получить продукты из этого магазина`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      rejectWithValue(`Error, ${error}`);
    }
  }
);

const initialState = {
  products: [
    {
      id: "1",
      title: "Бургер",
      price: 250,
      description: "Бургер с котлетой",
      image_path:
        "https://recipes.av.ru//media/recipes/100608_picture_XNlaEKL.jpg",
    },
    {
      id: "2",
      title: "Чизбургер",
      price: 300,
      description: "Чизбургер с сыром",
      image_path:
        "https://upload.wikimedia.org/wikipedia/commons/4/43/Burger_King_Quad_Stacker_cheeseburger.jpg",
    },
    {
      id: "3",
      title: "Пицца четыре сезона с овощами и грибаки с соусом ",
      price: 600,
      description: "Пицца с четыремя начинками",
      image_path:
        "https://richifamily.ru/upload/iblock/561/yyzcj2lcve7fgtye5ntrdlb5ysyd7nyz.jpeg",
    },
    {
      id: "4",
      title: "Хот-Дог",
      price: 150,
      description: "Горячая но не собака",
      image_path:
        "https://images.gastronom.ru/EgeRAvZr5uieLU3HG5Do-YZMxMKY7aq29aDHkks7tyM/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzNhNmFmZWY3LTE3N2YtNGRhOC1hMWI3LWJiZTEyZmVjOGM1Yi5qcGc.webp",
    },
    {
      id: "5",
      title: "Пицца пепперони",
      price: 450,
      description: "Пицца с острым салями",
      image_path:
        "https://www.chefmarket.ru/blog/wp-content/uploads/2020/07/hot-homemade-pepperoni-2000x1200.jpg",
    },
    {
      id: "6",
      title: "Попкорн",
      price: 250,
      description: "Сладкий попкорн",
      image_path:
        "https://e52e3ee2-628b-49a9-9e26-e5a61fd72b20.selcdn.net/upload/webp/b2d/1920_1080_1/%D0%A1%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D0%BF%D0%BA%D0%BE%D1%80%D0%BD.webp",
    },
  ],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProducts.pending, (state, action) => {
  //       state.isLoading = true;
  //       state.products = [];
  //       state.error = null;
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.products = action.payload;
  //       state.error = null;
  //     })
  //     .addCase(fetchProducts.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.products = [];
  //       state.error = action.payload.message;
  //     });
  // },
});

export const selectProducts = (state) => state.products.products;
export const selectProductById = (id) => (state) =>
  state.products.find((product) => product.id === id);
export default productsSlice.reducer;
