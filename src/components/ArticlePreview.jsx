import React, { Component } from "react";
import { Link } from "@reach/router";
//import * as api from
//api.whateverfunc

class ArticlePreview extends Component {
  render() {
    const {
      title,
      body,
      topic,
      author,
      created_at,
      comment_count,
      votes,
      article_id,
    } = this.props.article;
    return (
      <>
        <header>
          <Link to={`articles/${article_id}`}>{title}</Link>
        </header>
        <body>
          <h1>
            By {author} in {topic} topic, created at {created_at}
            <br></br>
            {comment_count} comments, {votes} votes
          </h1>
          <p>
            {this.props.formatArticles(body)}...
            <Link to={`articles/${article_id}`} articleId={article_id}>
              See full article
            </Link>
            <br></br>
          </p>
        </body>
      </>
    );
  }
}

export default ArticlePreview;
