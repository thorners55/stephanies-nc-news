import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">News Home</Link>
          </li>
          <br></br>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
