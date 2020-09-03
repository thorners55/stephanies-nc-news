import React, { Component } from "react";
import { Link } from "@reach/router";
import Comments from "./Comments.jsx";
import VoteUpdater from "./VoteUpdater.jsx";
import ErrorDisplay from "./ErrorDisplay.jsx";
import * as api from "../utils/api.js";
import * as utils from "../utils/utils.js";
import moment from "moment";

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
  };

  componentDidMount() {
    this.fetchArticle();
  }

  render() {
    const { isLoading, err, article } = this.state;
    if (isLoading) return <p class="loading">Loading...</p>;
    if (err) return <ErrorDisplay msg={err} />;
    else {
      let {
        article_id,
        title,
        body,
        votes,
        topic,
        author,
        created_at,
      } = article;
      const created = moment(created_at).format("MMMM Do YYYY, h:mm a");
      topic = utils.capitaliseFunc(topic);
      return (
        <>
          <article>
            <h1 className="subject">{title}</h1>
            <VoteUpdater
              votes={votes}
              id={article_id}
              commentOrArticle={"articles"}
            />

            <h3 className="info">
              <Link to={`/user/${author}`}>{author}</Link> in {topic}
              <br></br>
              Created {created}
            </h3>

            <p>{body}</p>
          </article>
          <Comments articleId={article_id} username={this.props.username} />
        </>
      );
    }
  }
}

export default Article;
