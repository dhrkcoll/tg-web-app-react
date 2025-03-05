import { useState, useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram.js";

function App() {
  const { tg, onToggleButton } = useTelegram();
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
