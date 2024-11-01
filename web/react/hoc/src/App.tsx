import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./components/CounterHooks";
import CounterRedux from "./components/CounterRedux";
import CounterHOC from "./components/CounterHOC";
import Switch from "react-switch";
import "./App.css";

function App() {
  const [switch1, setChecked1] = useState(false);
  const [switch2, setChecked2] = useState(false);
  const [switch3, setChecked3] = useState(false);

  return (
    <>
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" className="react-logo" />
        </a>
      </div>
      <h1>React - HOC</h1>
      <div className="container">
        <div className="card">
          <div className="text-section">Hooks: </div>
          <div className="control-section">
            <Switch
              onChange={(value) => setChecked1(value)}
              checked={switch1}
            />
            {switch1 && <Counter />}
          </div>
        </div>
        <div className="card">
          <div className="text-section">Redux: </div>
          <div className="control-section">
            <Switch
              onChange={(value) => setChecked3(value)}
              checked={switch3}
            />
            {switch3 && <CounterRedux />}
          </div>
        </div>
        <div className="card">
          <div className="text-section">Higher Order Component: </div>
          <div className="control-section">
            <Switch
              onChange={(value) => setChecked2(value)}
              checked={switch2}
            />
            {switch2 && <Counter />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
