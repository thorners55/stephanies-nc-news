import React, { Component } from "react";
import ArticlePreview from "./ArticlePreview";
import SortButtons from "./SortButtons.jsx";
import Loading from "./Loading.jsx";
import ErrorDisplay from "./ErrorDisplay.jsx";
import * as api from "../utils/api.js";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort: "created_at",
    order: "desc",
    err: "",
  };

  getArticles = (topic, author, sort, order) => {
    api
      .fetchArticles(topic, author, sort, order)
      .then((articles) => {
        this.setState({ articles, isLoading: false, sort, order });
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

  componentDidMount() {
    const { topic, username } = this.props;
    const { sort, order } = this.state;

    this.getArticles(topic, username, sort, order);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sort, order } = this.state;
    if (prevProps.topic !== topic) {
      this.getArticles(topic, undefined, sort, order);
    }
  }

  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplay msg={this.state.err} />;
    return (
      <>
        <SortButtons
          getArticles={this.getArticles}
          topic={this.props.topic}
          username={this.props.username}
        />

        <ul id="article-list">
          {this.state.articles.map((article) => {
            let { article_id } = article;
            return (
              <li key={article_id}>
                <article className="article-card">
                  <ArticlePreview article={article} />
                </article>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default ArticleList;
