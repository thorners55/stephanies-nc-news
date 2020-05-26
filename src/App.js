import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default App;
