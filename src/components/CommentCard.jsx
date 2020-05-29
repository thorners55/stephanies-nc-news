import React, { Component } from "react";
import { Link } from "@reach/router";
import VoteUpdater from "./VoteUpdater.jsx";

class CommentCard extends Component {
  render() {
    const { comment_id, author, created_at, votes, body } = this.props.comment;
    let id = comment_id.toString();
    return (
      <ul>
        <li>
          {console.log(id)}
          <Link to={`/user/${author}`}>{author}</Link> at {created_at}
          <br></br>
          <VoteUpdater
            votes={votes}
            id={comment_id}
            commentOrArticle={"comments"}
          />
          <br></br>
          <p>{body}</p>
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
