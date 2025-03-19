import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { YMaps } from "@pbe/react-yandex-maps";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <YMaps>
          <App />
        </YMaps>
      </RouterProvider>
    </Provider>
  </StrictMode>
);
