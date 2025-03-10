import { createBrowserRouter } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList.jsx";
import Form from "../components/Form/Form.jsx";
import Cart from "../components/Cart/Cart.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";

export const router = createBrowserRouter([
  { index: "/", element: <ProductList /> },
  { path: "/form", element: <Form /> },
  { path: "/cart", element: <Cart /> },
  { path: "/product/:productId", element: <ProductPage /> },
]);
