import React, { Component } from "react";
import { Link } from "@reach/router";
import PostComment from "./PostComment.jsx";

import * as api from "../utils/api.js";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  addComment = (commentObj) => {
    const { articleId } = this.props;
    console.dir(commentObj);
    api.addArticleComment(articleId, commentObj).then((comment) => {
      this.setState((currentState) => {
        return { comments: [comment, ...currentState.comments] };
      });
    });
  };

  componentDidMount() {
    const { articleId } = this.props;
    api.fetchComments(articleId).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) return <h3>Loading comments...</h3>;
    return (
      <>
        <PostComment addComment={this.addComment} />
        <ul>
          {this.state.comments.map((comment) => {
            let { author, body, created_at, comment_id, votes } = comment;

            return (
              <li key={comment_id}>
                <Link to={`/user/${author}`}>{author}</Link> at {created_at}
                <br></br>
                {votes} votes<br></br>
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
