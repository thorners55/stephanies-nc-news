import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import User from "./components/User";

import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    username: "grumpy19",
  };

  render() {
    return (
      <div>
        <header>NC News</header>
        <NavBar />
        <span>Logged in as {this.state.username}</span>
        <Router>
          <ArticleList path="/" />
          <ArticleList path="/topics/:topic" />
          <Article path="/articles/:article_id" />
          <User path="/user/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
