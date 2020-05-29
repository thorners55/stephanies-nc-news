import React, { Component } from "react";

class LogIn extends Component {
  state = {
    username: "weegembump",
  };

  handleClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({ username: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { updateUser } = this.props;
    const { username } = this.state;
    updateUser(username);
  };

  render() {
    return (
      <>
        <section>
          Logged in as {this.props.username}
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
            <input type="submit"></input>
          </form>
        </section>
      </>
    );
  }
}

export default LogIn;
