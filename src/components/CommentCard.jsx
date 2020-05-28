import React, { Component } from "react";
import { Link } from "@reach/router";
import VoteUpdater from "./VoteUpdater.jsx";

class CommentCard extends Component {
  render() {
    console.log("rendering in commentcard");
    const { comment_id, author, created_at, votes, body } = this.props.comment;

    return (
      <ul>
        <li key={comment_id}>
          <Link to={`/user/${author}`}>{author}</Link> at {created_at}
          <br></br>
          <VoteUpdater
            votes={votes}
            id={comment_id}
            commentOrArticle={"comments"}
          />
          <br></br>
          {body}
          <br></br>
          {this.props.username === author && (
            <button onClick={this.props.removeComment} name={comment_id}>
              Delete
            </button>
          )}
        </li>
      </ul>
    );
  }
}

export default CommentCard;
