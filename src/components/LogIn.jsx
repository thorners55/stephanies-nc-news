import React, { Component } from "react";

class LogIn extends Component {
  state = {
    username: "cooljmessy",
  };

  handleClick = (event) => {
    event.preventDefault();
    const { value } = event.target;
    const { updateUser } = this.props;
    this.setState({ username: value });
    updateUser(value);
  };

  render() {
    const { username } = this.props;
    return (
      <>
        <span className="fas fa-user" role="presentation">
          {" "}
        </span>
        Logged in as <b> {this.props.username}</b>
        <form onSubmit={this.handleSubmit}>
          <label>
            Change user:
            <select
              name="usernames"
              id="change-user"
              value={`${username}`}
              onChange={this.handleClick}
            >
              <option value="cooljmessy">cooljmessy</option>
              <option value="weegembump">weegembump</option>
              <option value="tickle122">tickle122</option>
              <option value="grumpy19">grumpy19</option>
              <option value="happyamy2016">happyamy2016</option>
              <option value="jessjelly">jessjelly</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

export default LogIn;
