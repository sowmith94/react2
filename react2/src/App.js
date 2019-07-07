import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";
import Modal from "./Modal";

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
            <button onClick={toggle}>Login Modal</button>
            <Modal on={on} toggle={toggle}>
              <h1>I'm living inside a Modal Component</h1>
            </Modal>
          </Fragment>
        )}
      </Toggle>
    </div>
  );
}

export default App;
