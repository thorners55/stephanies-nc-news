import React, { Component } from "react";
import ArticleList from "./ArticleList.jsx";
import Loading from "./Loading.jsx";
import ErrorDisplay from "./ErrorDisplay.jsx";
import * as api from "../utils/api.js";

class User extends Component {
  state = {
    username: "",
    avatar_url: "",
    name: "",
    isLoading: true,
    err: "",
  };

  componentDidMount() {
    const { username } = this.props;
    api
      .getUser(username)
      .then(({ username, avatar_url, name }) => {
        this.setState({ username, avatar_url, name, isLoading: false });
      })
      .catch((err) => {
        const {
          response: {
            data: { msg },
          },
        } = err;
        this.setState({ err: msg, isLoading: false });
      });
  }

  render() {
    const { isLoading, err } = this.state;
    if (isLoading) return <Loading />;
    if (err) return <ErrorDisplay msg={err} />;
    const { username } = this.props;
    const { avatar_url, name } = this.state;
    return (
      <>
        <header className="user">
          <img src={avatar_url} alt={`${username}'s avatar`} className="img" />
          <div className="name">
            <h2 className="subject">{username}</h2>
            <span>{name}</span>
          </div>
        </header>

        <h3 className="articles-by">Articles by {username}</h3>

        <ArticleList username={username} />
      </>
    );
  }
}

export default User;
