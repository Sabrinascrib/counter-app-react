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
    <div className="App flex bg-white w-96 h-96 items-center flex-col mt-52 mx-auto">
      <span className="mt-9 text-2xl">{count}</span>
      <div className="buttons mt-5">
        <button
          className=" text-2xl shadow p-2 bg-blue-200 w-24 mr-8 rounded-md"
          onClick={decrease}
        >
          -
        </button>
        <button
          className=" text-2xl shadow p-1 border-solid border-4 border-blue-200 w-24 rounded-md"
          onClick={setToZero}
        >
          reset
        </button>
        <button
          className=" text-2xl shadow p-2 bg-blue-200 w-24 ml-8 rounded-md"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
