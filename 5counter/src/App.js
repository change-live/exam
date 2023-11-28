import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <button
        style={{ fontSize: "1.5rem" }}
        onClick={() => setNumber(number + 1)}
      >
        加加加加
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          margin: "2rem 0",
        }}
      >
        {number}
      </div>
      <button
        style={{ fontSize: "1.5rem" }}
        onClick={() => setNumber(number - 1)}
      >
        減減減減
      </button>
    </div>
  );
}

export default App;
