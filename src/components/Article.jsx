import React, { Component } from "react";
import Axios from "axios";
import Comments from "./Comments.jsx";

import * as utils from "../utils/utils.js";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  fetchArticle = () => {
    return Axios.get(
      `https://stephanies-news.herokuapp.com/api/articles/${this.props.article_id}`
    ).then(({ data: { article } }) => {
      this.setState({ article, isLoading: false });
    });
  };

  componentDidMount() {
    console.log("Mounting...");
    this.fetchArticle();
  }

  render() {
    console.log("Rendering...");
    if (this.state.isLoading) return <p>Loading...</p>;
    let {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
    } = this.state.article;
    topic = utils.capitaliseFunc(topic);
    return (
      <>
        <h1>{title}</h1>
        <br></br>
        <span>{votes} votes</span>
        <h2>
          {author} in {topic}
          <br></br>
          Created at {created_at}
        </h2>
        <br></br>
        <p>{body}</p>
        <p>
          <h3>{comment_count} Comments</h3>

          <Comments articleId={article_id} />
        </p>
      </>
    );
  }
}

export default Article;
