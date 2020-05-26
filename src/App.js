import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";

import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <header>NC News</header>
        <NavBar />
        <Router>
          <ArticleList path="/" />
          <Article path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
