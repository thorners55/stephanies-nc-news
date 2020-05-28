import React, { Component } from "react";
import Axios from "axios";
import Comments from "./Comments.jsx";
import VoteUpdater from "./VoteUpdater.jsx";
import * as api from "../utils/api.js";
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
    } = this.state.article;
    topic = utils.capitaliseFunc(topic);
    return (
      <>
        <h1>{title}</h1>
        <br></br>
        <VoteUpdater
          votes={votes}
          id={article_id}
          commentOrArticle={"articles"}
        />
        <h2>
          {author} in {topic}
          <br></br>
          Created at {created_at}
        </h2>
        <br></br>
        <p>{body}</p>
        <p>
          <Comments articleId={article_id} username={this.props.username} />
        </p>
      </>
    );
  }
}

export default Article;
