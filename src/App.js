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
}

export default App;
