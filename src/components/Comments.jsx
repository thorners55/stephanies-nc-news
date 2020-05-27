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

  removeComment = (event) => {
    const { name } = event.target;
    const updatedComments = this.state.comments.map((comment) => {
      return comment.comment_id !== name;
    });
    this.setState({ comments: updatedComments, isLoading: true });
    api.deleteComment(name).then(() => {
      this.updateCommentData();
    });
  };

  updateCommentData = () => {
    const { articleId } = this.props;
    api.fetchComments(articleId).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  componentDidMount() {
    this.updateCommentData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      this.updateCommentData();
    }
  }

  render() {
    if (this.state.isLoading) return <h3>Loading comments...</h3>;

    return (
      <>
        <h3>{this.state.comments.length} Comments</h3>
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
                <br></br>
                {this.props.username === author && (
                  <button onClick={this.removeComment} name={comment_id}>
                    Delete
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Comments;
