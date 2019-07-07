import React, { Component } from "react";

export default class Toggle extends Component {
  state = {
    on: true
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  render() {
    return (
      <div>
        {this.state.on && <h1>toggle this component</h1>}
        <button onClick={this.toggle}>Hide/Show</button>
      </div>
    );
  }
}
