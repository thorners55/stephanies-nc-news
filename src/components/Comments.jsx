import React, { Component } from "react";

import PostComment from "./PostComment.jsx";
import CommentCard from "./CommentCard.jsx";

import * as api from "../utils/api.js";

class Comments extends Component {
  state = {
    comments: [],
  };

  addComment = (commentObj) => {
    const { articleId } = this.props;
    api.addArticleComment(articleId, commentObj).then((comment) => {
      this.setState((currentState) => {
        return { comments: [comment, ...currentState.comments] };
      });
    });
  };

  removeComment = (event) => {
    const { name } = event.target;
    this.setState((currentState) => {
      return {
        comments: currentState.comments.filter((comment) => {
          return comment.comment_id !== parseInt(name);
        }),
      };
    });
    api.deleteComment(name);
  };

  componentDidMount() {
    const { articleId } = this.props;
    api.fetchComments(articleId).then((comments) => {
      this.setState({ comments });
    });
  }

  render() {
    const { username } = this.props;

    return (
      <>
        <section>
          <div className="info">{this.state.comments.length} Comments</div>
          <br></br>
          <PostComment addComment={this.addComment} username={username} />
          {this.state.comments.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                username={username}
                removeComment={this.removeComment}
              />
            );
          })}
        </section>
      </>
    );
  }
}

export default Comments;
