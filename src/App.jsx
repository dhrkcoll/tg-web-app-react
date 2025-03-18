import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const { tg } = useTelegram();
  console.log(tg.initData);
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
