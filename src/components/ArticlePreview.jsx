import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";

class ArticlePreview extends Component {
  render() {
    const {
      title,
      body,
      topic,
      author,
      created_at,
      comment_count,
    } = this.props.article;
    return <header>{title}</header>;
  }
}

export default ArticlePreview;
