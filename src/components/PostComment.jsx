import React, { Component } from "react";

class PostComment extends Component {
  state = {
    username: "grumpy19",
    body: "",
  };

  handleChange = (event) => {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.comment < 4) return;
    this.props.addComment(this.state);
    this.setState({ username: "grumpy19", body: "" });
  };

  render() {
    return (
      <>
        {" "}
        <span>Post comment</span>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <label>
            <input
              type="text"
              value={this.state.body}
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
