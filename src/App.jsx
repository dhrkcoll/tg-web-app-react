import { useState, useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";
import Header from "./components/Header/Header";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
