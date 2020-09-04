import React, { Component } from "react";

class LogIn extends Component {
  state = {
    username: "weegembump",
  };

  handleClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { updateUser } = this.props;
    this.setState({ username: value });
    updateUser(value);
  };

  render() {
    return (
      <>
        <span class="fas fa-user" role="img" aria-label="User icon"></span>
        <b> {this.props.username}</b>
        <br></br>
        Change user:<br></br>
        <form onSubmit={this.handleSubmit}>
          <select id="username" onChange={this.handleClick}>
            <option value="weegembump">weegembump</option>
            <option value="tickle122">tickle122</option>
            <option value="grumpy19">grumpy19</option>
            <option value="happyamy2016">happyamy2016</option>
            <option value="jessjelly">jessjelly</option>
            <option value="cooljmessy">cooljmessy</option>
          </select>
        </form>
      </>
    );
  }
}

export default LogIn;
