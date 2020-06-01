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
        <Link to={`/articles/${article_id}`} className="preview-subject">
          {title}
        </Link>
      </header>

      <h1 className="preview-info">
        by <Link to={`/user/${author}`}>{author}</Link> in {topic} topic,
        created {created}
        <br></br>
        {comment_count} comments, {votes} votes
      </h1>
      <p>
        {utils.formatArticles(body)}...
        <Link to={`/articles/${article_id}`} className=" preview-subject">
          See full article
        </Link>
        <br></br>
      </p>
    </>
  );
}

export default ArticlePreview;
