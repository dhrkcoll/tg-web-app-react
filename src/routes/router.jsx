import { createBrowserRouter } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList.jsx";
import Form from "../components/Form/Form.jsx";
import Cart from "../components/Cart/Cart.jsx";

export const router = createBrowserRouter([
  { index: "/", element: <ProductList /> },
  { path: "/form", element: <Form /> },
  { path: "/cart", element: <Cart /> },
]);
