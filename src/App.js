import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import User from "./components/User";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import ErrorDisplay from "./components/ErrorDisplay.jsx";
import Footer from "./components/Footer";

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
        <header id="site-header">
          <div id="login">
            <LogIn
              updateUser={this.updateUser}
              username={this.state.username}
            />
          </div>
          <div id="northcoders-heading">
            <Link to="/" className="home-link">
              <span
                className="newspaper-icon"
                role="img"
                aria-label="Newspaper icon"
              >
                <span className="far fa-newspaper newspaper-icon"></span>
              </span>
              <h1 aria-label="north coders news">NORTHCODERS NEWS</h1>
            </Link>
          </div>
        </header>

        <div id="main-area">
          <div id="sidebar">
            <NavBar />
          </div>

          <main>
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
          </main>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
