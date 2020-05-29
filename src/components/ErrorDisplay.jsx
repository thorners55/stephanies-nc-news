import React, { Component } from "react";

class ErrorDisplay extends Component {
  render() {
    console.log("Rendering error display");
    const { msg } = this.props;
    if (!msg) {
      return <h1>Path not found</h1>;
    }

    return <h1>{msg}</h1>;
  }
}

export default ErrorDisplay;
