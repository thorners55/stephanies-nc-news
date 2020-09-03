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
    let user = JSON.parse(gotUsername);
    if (!user) user = "cooljmessy";
    this.setState({ username: user });
  };

  componentDidMount() {
    this.retrieveUsername();
  }

  render() {
    return (
      <>
        <header className="site-header">
          <div className="login">
            <LogIn
              updateUser={this.updateUser}
              username={this.state.username}
            />
          </div>
          <div className="northcoders-heading">
            <span className="newspaper-icon">
              <i className="far fa-newspaper"></i>
            </span>
            <div className="site-title">NORTHCODERS NEWS</div>
          </div>
        </header>

        <div className="body">
          <section className="sidebar">
            <NavBar />
          </section>

          <Router className="main">
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
        </div>
      </>
    );
  }
}

export default App;
