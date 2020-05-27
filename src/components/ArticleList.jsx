import React, { Component } from "react";
import ArticlePreview from "./ArticlePreview";
import * as api from "../utils/api.js";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    api.fetchArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
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
