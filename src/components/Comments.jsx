import React, { Component } from "react";

import PostComment from "./PostComment.jsx";
import CommentCard from "./CommentCard.jsx";

import * as api from "../utils/api.js";

class Comments extends Component {
  state = {
    comments: [],
    commentToDelete: "",
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
    this.state.commentToDelete = name;

    const updatedComments = this.state.comments.filter((comment) => {
      return comment.comment_id !== parseInt(name);
    });

    this.setState({ comments: updatedComments });

    api.deleteComment(name);
  };

  componentDidMount() {
    const { articleId } = this.props;
    api.fetchComments(articleId).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    console.dir(this.state);

    return (
      <>
        <h3>{this.state.comments.length} Comments</h3>
        <PostComment addComment={this.addComment} />
        {this.state.comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              username={this.props.username}
              removeComment={this.removeComment}
            />
          );
        })}
      </>
    );
  }
}

export default Comments;
