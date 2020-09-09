import React from "react";
import { Link } from "@reach/router";
import * as utils from "../utils/utils";
import moment from "moment";

function ArticlePreview(props) {
  const {
    title,
    body,
    topic,
    author,
    created_at,
    comment_count,
    votes,
    article_id,
  } = props.article;
  const created = moment(created_at).format("MMMM Do YYYY, h:mm a");
  return (
    <>
      <header>
        <h2>
          <Link to={`/articles/${article_id}`}>{title}</Link>
        </h2>

        <p id="preview">
          by <Link to={`/user/${author}`}>{author}</Link> in{" "}
          {utils.capitaliseFunc(topic)}, created {created}
          <br />
          <Link to={`/articles/${article_id}`}>
            {votes} votes, {comment_count} comments
          </Link>
        </p>
      </header>
      <p>
        {utils.formatArticles(body)}...
        <Link to={`/articles/${article_id}`}>See full article</Link>
      </p>
    </>
  );
}

export default ArticlePreview;
