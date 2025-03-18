import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    console.log(tg);
  }, []);

  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
