import React from "react";
import { Link } from "@reach/router";
import VoteUpdater from "./VoteUpdater.jsx";
import moment from "moment";

function CommentCard(props) {
  const { comment_id, author, created_at, votes, body } = props.comment;
  const created = moment(created_at).format("MMMM Do YYYY, h:mm a");
  return (
    <ul>
      <li id="comment-card">
        <h4>
          <Link to={`/user/${author}`}>{author}</Link> on {created}
        </h4>
        <VoteUpdater
          votes={votes}
          id={comment_id}
          commentOrArticle={"comments"}
        />

        <p>{body}</p>

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
