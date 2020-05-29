import React, { Component } from "react";
import ArticlePreview from "./ArticlePreview";
import SortButtons from "./SortButtons.jsx";
import ErrorDisplay from "./ErrorDisplay.jsx";
import * as api from "../utils/api.js";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
  };

  getArticles = (topic, username) => {
    api
      .fetchArticles(topic, username)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        const {
          response: {
            data: { msg },
          },
        } = err;
        this.setState({ err: msg, isLoading: false });
      });
  };

  getArticlesByQuery = (sort_by, order) => {
    api.fetchArticlesByQuery(sort_by, order).then((articles) => {
      console.dir(articles);
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    console.log("Mounting");
    const { topic, username } = this.props;
    this.getArticles(topic, username);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.getArticles(topic);
    }
  }

  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <p>LOADING...</p>;
    if (err) return <ErrorDisplay msg={this.state.err} />;
    return (
      <>
        <br></br>
        <span>Sort by: </span>
        <SortButtons getArticlesByQuery={this.getArticlesByQuery} />
        <ul>
          {this.state.articles.map((article) => {
            let { article_id } = article;
            return (
              <li key={article_id}>
                <ArticlePreview article={article} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ArticleList;
