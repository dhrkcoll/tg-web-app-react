import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

const MainPage = () => {
  return (
    <div style={{ background: "var(--tg-theme-secondary-bg-color)" }}>
      <Header />
      <ProductList />
    </div>
  );
};

export default MainPage;
