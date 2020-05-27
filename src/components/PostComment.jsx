import React, { Component } from "react";

class PostComment extends Component {
  state = {
    username: "",
    body: "",
  };

  handleChange = (event) => {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
    console.log(this.state[name]);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.comment < 4) return;
    this.props.addComment(this.state);
    this.setState({ username: "", body: "" });
    //ISNT REVERTING TO "" ON BODY
  };

  render() {
    return (
      <>
        {" "}
        <span>Post comment</span>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.username}
              minLength={7}
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>
          <label>
            <input
              type="text"
              value={this.state.comment}
              minLength={3}
              name="body"
              placeholder="Type comment here..."
              onChange={this.handleChange}
            ></input>
          </label>
          <br></br>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default PostComment;
