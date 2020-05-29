import React, { Component } from "react";
import ArticlePreview from "./ArticlePreview";
import SortButtons from "./SortButtons.jsx";
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
    if (isLoading) return <p>LOADING...</p>;
    if (err) return <ErrorDisplay msg={this.state.err} />;
    return (
      <>
        <br></br>
        <section>
          Sort by:
          <SortButtons
            getArticles={this.getArticles}
            topic={this.props.topic}
            username={this.props.username}
          />
        </section>
        <ul>
          {this.state.articles.map((article) => {
            let { article_id } = article;
            return (
              <li key={article_id}>
                <article>
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
