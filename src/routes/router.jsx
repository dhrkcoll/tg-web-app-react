import { createBrowserRouter } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import Form from "../components/Form/Form";

export const router = createBrowserRouter([
  { index: "/", element: <ProductList /> },
  { path: "/form", element: <Form /> },
]);
