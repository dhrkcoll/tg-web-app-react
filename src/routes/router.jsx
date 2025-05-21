import { createBrowserRouter } from "react-router-dom";
import ProductPage from "../pages/ProductPage/ProductPage.jsx";
import App from "../App.jsx";
import Menu from "../pages/Menu/Menu.jsx";
import SelectPickupPage from "../pages/SelectPickupPage/SelectPage.jsx";
import SelectCityPage from "../pages/SelectCityPage/SelectCityPage.jsx";
import SelectDelieverPage from "../pages/SelectDelieverPage/SelectDelieverPage.jsx";
import AddAdressPage from "../pages/AddAdressPage/AddAdressPage.jsx";
import { YMaps } from "@pbe/react-yandex-maps";
import config from "../../config/config.json";
import OrderPage from "../pages/OrderPage/OrderPage.jsx";
import SelectPaymentMethod from "../pages/SelectPaymentMethod/SelectPaymentMethod.jsx";
import MainPage from "../pages/MainPage/MainPage.jsx";
import Cart from "../pages/Cart/Cart.jsx";
import UserLayout from "../layouts/UserLayout/UserLayout.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <MainPage />,
          },
          { path: "/cart", element: <Cart /> },
          { path: "/products/:productId", element: <ProductPage /> },
          { path: "/menu", element: <Menu /> },
          { path: "/select-pickup", element: <SelectPickupPage /> },
          { path: "/select-city", element: <SelectCityPage /> },
          { path: "/select-deliever", element: <SelectDelieverPage /> },
          {
            path: "/add-adress",
            element: (
              <YMaps query={{ apikey: config.YANDEX_API_KEY }}>
                <AddAdressPage />
              </YMaps>
            ),
          },
          { path: "/order", element: <OrderPage /> },
          { path: "/payment-method", element: <SelectPaymentMethod /> },
        ],
      },
      {
        path: "/admin",
        // element: <AdminLayout />,
      },
    ],
  },
]);
