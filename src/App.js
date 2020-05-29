import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import User from "./components/User";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import ErrorDisplay from "./components/ErrorDisplay.jsx";

class App extends Component {
  state = {
    username: "cooljmessy",
  };

  updateUser = (username) => {
    this.setState({ username });
    localStorage.setItem("username", JSON.stringify(username));
  };

  retrieveUsername = () => {
    const gotUsername = localStorage.getItem("username");
    const user = JSON.parse(gotUsername);

    this.setState({ username: user });
  };

  componentDidMount() {
    this.retrieveUsername();
  }

  render() {
    return (
      <>
        <header>
          NC News
          <NavBar />
          <LogIn updateUser={this.updateUser} username={this.state.username} />
        </header>

        <Router>
          <ArticleList path="/" />
          <ArticleList path="/articles" />
          <ArticleList path="/topics/:topic" />
          <Article
            path="/articles/:article_id"
            username={this.state.username}
          />
          <User path="/user/:username" />
          <ErrorDisplay default />
        </Router>
      </>
    );
  }
}

export default App;
