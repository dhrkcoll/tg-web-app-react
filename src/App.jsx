import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { Outlet } from "react-router-dom";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [tg]);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
