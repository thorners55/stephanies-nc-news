import React, { Component } from "react";
import ArticlePreview from "./ArticlePreview";
import * as api from "../utils/api.js";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  getArticles = (topic) => {
    api.fetchArticles(topic).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  componentDidMount() {
    const { topic } = this.props;
    this.getArticles(topic);
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== topic) {
      this.getArticles(topic);
    }
  }

  render() {
    if (this.state.isLoading) return <p>LOADING...</p>;

    return (
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
    );
  }
}

export default ArticleList;
