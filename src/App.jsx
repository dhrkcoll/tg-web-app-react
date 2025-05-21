import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";
import { YMaps } from "@pbe/react-yandex-maps";

import { Outlet } from "react-router-dom";

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [tg]);

  return (
    <>
      <YMaps>
        <Outlet />
      </YMaps>
    </>
  );
}

export default App;
