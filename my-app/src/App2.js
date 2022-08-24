import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // State to store count value
  const [count, setCount] = useState(0);
  const [value, mulValue] = useState(100);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const doubleValue = () => {
    mulValue(value * 2);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>the Incremented counter is: {count}</p>
        <button onClick={incrementCount}>Increment Counter</button>
        <br></br>
        <p>Multiplied value here:{value}</p>

        <button onClick={doubleValue}>Double Value</button>
      </header>
    </div>
  );
}

export default App;