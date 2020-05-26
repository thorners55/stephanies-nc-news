import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import ArticleList from "./components/ArticleList";

import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <header>NC News</header>
        <NavBar />
        <Router>
          <ArticleList path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
