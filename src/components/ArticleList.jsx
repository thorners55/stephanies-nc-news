import React, { Component } from "react";
import axios from "axios";
import ArticlePreview from "./ArticlePreview";

class ArticleList extends Component {
  state = {
    articles: [],
  };

  fetchArticles = () => {
    return axios
      .get("https://stephanies-news.herokuapp.com/api/articles")
      .then(({ data: { articles } }) => {
        this.setState({ articles });
      });
  };

  formatArticles = (body) => {
    console.log(body);
    const preview = body.split(" ");
    return preview.slice(0, 30).join(" ");
  };

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
