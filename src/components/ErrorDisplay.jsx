import React, { Component } from "react";

class ErrorDisplay extends Component {
  render() {
    const { msg } = this.props;
    if (!msg) {
      return <h2>Path not found</h2>;
    }

    return <h2>{msg}</h2>;
  }
}

export default ErrorDisplay;
