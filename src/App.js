// import "./App.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App flex items-center flex-col">
      <span>{count}</span>
      <div className="buttons">
        <button onClick={increase}>+</button>
        <button onClick={setToZero}>Reset</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
