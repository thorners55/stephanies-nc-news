import React, { Component } from "react";
import Comments from "./Comments.jsx";
import VoteUpdater from "./VoteUpdater.jsx";
import ErrorDisplay from "./ErrorDisplay.jsx";
import * as api from "../utils/api.js";
import * as utils from "../utils/utils.js";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: "",
  };

  fetchArticle = () => {
    const { article_id } = this.props;
    api
      .fetchArticle(article_id)
      .then(({ article }) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        console.dir(err.response);
        const {
          data: { msg },
        } = err.response;
        this.setState({ err: msg, isLoading: false });
      });
    /* try {
      const { article_id } = this.props;
      const article = api.fetchArticle(article_id);
      this.setState({ article, isLoading: false });
    } catch (err) {
      console.dir(err.response);
      const {
        data: { msg },
        status,
      } = err.response;
      this.setState({ err: status + " " + msg, isLoading: false });
    } */
  };

  componentDidMount() {
    console.log("Mounting...");
    this.fetchArticle();
  }

  render() {
    console.log("Rendering...");
    const { isLoading, err, article } = this.state;
    console.dir(this.state);

    if (isLoading) return <p>Loading...</p>;
    if (err) return <ErrorDisplay msg={err} />;
    else {
      console.dir(this.state);

      let {
        article_id,
        title,
        body,
        votes,
        topic,
        author,
        created_at,
      } = article;

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
}

export default Article;
