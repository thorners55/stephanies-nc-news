import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../utils/api.js";
import { formatTopics } from "../utils/utils.js";

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    api
      .fetchTopics()
      .then((topics) => {
        return formatTopics(topics);
      })
      .then((topics) => {
        this.setState({ topics });
      });
  }

  render() {
    return (
      <nav>
        <ul id="link-list">
          <br></br>
          {/*<header>Topics</header>*/}
          {this.state.topics.map((slug) => {
            return (
              <li key={slug}>
                <Link to={`/topics/${slug.toLowerCase()}`} className="nav-link">
                  {slug}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
