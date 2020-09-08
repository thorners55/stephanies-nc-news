import React, { Component } from "react";

class PostComment extends Component {
  state = {
    username: "",
    body: "",
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ username: this.props.username, body: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.body < 4) return;
    this.props.addComment(this.state);
    this.setState({ username: this.props.username, body: "" });
  };

  componentDidMount() {
    this.setState({ username: "", body: "" });
  }

  render() {
    return (
      <>
        {" "}
        <form onSubmit={this.handleSubmit}>
          <textarea
            value={this.state.body}
            minLength={3}
            name="body"
            placeholder="Type comment here..."
            onChange={this.handleChange}
            required
          ></textarea>

          <br></br>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default PostComment;
