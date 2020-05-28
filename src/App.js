import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import User from "./components/User";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";

class App extends Component {
  state = {
    username: "grumpy19",
  };

  updateUser = (username) => {
    this.setState({ username });
  };

  render() {
    return (
      <div>
        <header>NC News</header>
        <NavBar />

        <LogIn updateUser={this.updateUser} username={this.state.username} />
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:topic" />
          <Article
            path="/articles/:article_id"
            username={this.state.username}
          />
          <User path="/user/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
