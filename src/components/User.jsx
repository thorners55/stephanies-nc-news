import React, { Component } from "react";
import ArticleList from "./ArticleList.jsx";
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
    if (isLoading) return <span>User loading...</span>;
    if (err) return <ErrorDisplay msg={err} />;
    const { username } = this.props;
    const { avatar_url, name } = this.state;
    console.log(username);
    return (
      <>
        <h1>{username}</h1>
        <br></br>
        <div>{name}</div>
        <br></br>
        <img src={avatar_url} alt={`${username}'s avatar`}></img>

        <br></br>
        <h2>Articles by {username}</h2>
        <br></br>
        <ArticleList username={username} />
      </>
    );
  }
}

export default User;
