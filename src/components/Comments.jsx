import React, { Component } from "react";
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
    /*api.addArticleComment(articleId, commentObj).then((response) => {
      console.dir(response); 
    }); */
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
        <PostComment addComment={this.addComment} />
        <ul>
          {this.state.comments.map((comment) => {
            let { author, body, created_at, comment_id } = comment;
            return (
              <li key={comment_id}>
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
