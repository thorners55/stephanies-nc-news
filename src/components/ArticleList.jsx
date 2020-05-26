import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import ArticlePreview from "./ArticlePreview";

class ArticleList extends Component {
  state = {
    articles: [],
  };

  fetchArticles = () => {
    return axios
      .get("https://stephanies-news.herokuapp.com/api/articles")
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      });
  };

  formatArticles = () => {};

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    return (
      <ul>
        {this.state.articles.map((article) => {
          return (
            <li>
              <ArticlePreview
                article={article}
                formatArticles={this.formatArticles}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ArticleList;
