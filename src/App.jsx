import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      Work
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default App;
