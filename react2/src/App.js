import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";

function App() {
  return (
    <div className="App">
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
          <Fragment>
            {on && <h1> Show/Hide this component</h1>}
            <button onClick={toggle}> Show/Hide</button>
            <Portal>{on && <h1>This is a Portal</h1>}</Portal>
          </Fragment>
        )}
      </Toggle>
    </div>
  );
}

export default App;
