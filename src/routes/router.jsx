import { createBrowserRouter } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList.jsx";
import Form from "../components/Form/Form.jsx";
import Cart from "../components/Cart/Cart.jsx";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import App from "../App.jsx";

export const router = createBrowserRouter([
  { index: "/", element: <App /> },
  { path: "/form", element: <Form /> },
  { path: "/cart", element: <Cart /> },
  { path: "/products/:productId", element: <ProductPage /> },
]);
