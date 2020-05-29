import React from "react";
import { Link } from "@reach/router";
import VoteUpdater from "./VoteUpdater.jsx";

function CommentCard(props) {
  const { comment_id, author, created_at, votes, body } = props.comment;
  return (
    <ul>
      <li>
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
        {props.username === author && (
          <button onClick={props.removeComment} name={comment_id}>
            Delete
          </button>
        )}
      </li>
    </ul>
  );
}

export default CommentCard;
