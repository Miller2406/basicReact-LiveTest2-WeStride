import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const incCount = () => {
    setCount(count + 1);
  };

  const reset = () => {
    stop();
    setCount(0);
  };

  const start = () => {
    if (!isRunning) {
      incCount();
    }
    setIsRunning(true);
  };

  const stop = () => {
    clearInterval(myInterval);
    setIsRunning(false);
  };

  let myInterval;
  useEffect(() => {
    if (isRunning) {
      myInterval = setInterval(() => {
        incCount();
        clearInterval(myInterval);
      }, 1000);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Test Basic React 2</h1>
      <div className="count">{count < 10 ? "0" + count : count}</div>
      <div>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
