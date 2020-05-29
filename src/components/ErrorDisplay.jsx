import React, { Component } from "react";

class ErrorDisplay extends Component {
  render() {
    console.log("Rendering error display");
    const { msg } = this.props;

    return <h1>{msg}</h1>;
  }
}

export default ErrorDisplay;
