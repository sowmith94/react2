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
    const { render } = this.props;
    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle
        })}
      </div>
    );
  }
}
