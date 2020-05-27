import React, { Component } from "react";
import PostComment from "./PostComment.jsx";
import * as api from "../utils/api.js";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    const { articleId } = this.props;
    api.fetchComments(articleId).then((comments) => {
      this.setState({ comments, isLoading: false });
      console.dir(this.state.comments);
    });
  }

  render() {
    if (this.state.isLoading) return <h3>Loading comments...</h3>;
    return (
      <>
        <PostComment />
        <h3>Comments</h3>
        <ul>
          {this.state.comments.map((comment) => {
            let { author, body, created_at } = comment;
            return (
              <li>
                {author} at {created_at}
                <br></br>
                {body}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Comments;
