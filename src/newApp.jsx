import React, { useState, useEffect } from "react";
import "./newStyle.css";

function App() {

  const [counter, setCounter] = useState(30);
  const [running, setRunning] = useState(false);
  const [theme, setTheme] = useState("light");
  
  
  useEffect(() => {

    if (!running) return;

    if (counter === 0) {
      setRunning(false);
      setTheme("dark");   
      return;
    }

    const timer = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);

    return () => clearTimeout(timer);

  }, [counter, running]);



  function startTimer() {
    setRunning(true);
  }

  function resetTimer() {
    setRunning(false);
    setCounter(30);
    setTheme("light");
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }


  const progressWidth = (counter / 30) * 270;

  return (

    <div className={`main ${theme}`}>

      <h1>Mid term preparation has been started</h1>

      <p className="count">{counter}</p>

      <div className="container">
        <div className="diver"></div>

        <div
          className="divers"
          style={{ width: progressWidth + "px" }}
        ></div>
      </div>

      <br />

      {counter === 0 && <p>Time's Up</p>}

      <br />

      <button onClick={startTimer}>Start</button>

      <br />

      <button onClick={resetTimer}>Reset</button>

      <br />

      <button onClick={toggleTheme}>Toggle Theme</button>

    </div>
  );
}

export default App;