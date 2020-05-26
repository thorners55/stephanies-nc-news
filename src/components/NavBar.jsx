import React, { Component } from "react";
import { Link } from "@reach/router";
import axios from "axios";

class NavBar extends Component {
  state = {
    topics: [],
  };

  fetchTopics = () => {
    return axios
      .get("https://stephanies-news.herokuapp.com/api/topics")
      .then(({ data: { topics } }) => {
        return topics.map(({ slug }) => {
          return slug.charAt(0).toUpperCase() + slug.slice(1);
        });
      })
      .then((topics) => {
        this.setState({ topics });
      });
  };

  componentDidMount() {
    this.fetchTopics();
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">News Homepage</Link>
          </li>
          <br></br>
          <header>Topics</header>
          {this.state.topics.map((slug) => {
            return (
              <li key={slug}>
                <Link to={`/topics/${slug}`}>{slug}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
