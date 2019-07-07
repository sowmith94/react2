import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRPC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Toggle render props */}
        {/* <Toggle
          render={({ on, toggle }) => (
            <div>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>show/hide</button>
            </div>
          )}
        /> */}
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1> Show/Hide this component</h1>}
              <button onClick={toggle}> Show/Hide</button>
            </div>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
