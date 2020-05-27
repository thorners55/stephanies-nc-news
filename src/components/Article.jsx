import React, { Component } from "react";

import Axios from "axios";

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
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
    } = this.state.article;
    console.log(body);
    return (
      <>
        <h1>{title}</h1>
        <br></br>
        <h2>
          {author} in {topic} topic
          <br></br>
          Created at {created_at}
        </h2>
        <br></br>
        <p>{body}</p>
      </>
    );
  }
}

export default Article;
