import React from "react";
import { Link } from "@reach/router";
import * as utils from "../utils/utils";
//import * as api from
//api.whateverfunc

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
  return (
    <>
      <header>
        <Link to={`/articles/${article_id}`}>{title}</Link>
      </header>

      <h1>
        By {author} in {topic} topic, created at {created_at}
        <br></br>
        {comment_count} comments, {votes} votes
      </h1>
      <p>
        {utils.formatArticles(body)}...
        <Link to={`/articles/${article_id}`}>See full article</Link>
        <br></br>
      </p>
    </>
  );
}

export default ArticlePreview;
