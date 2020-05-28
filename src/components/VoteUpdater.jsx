import React, { Component } from "react";
import * as api from "../utils/api.js";

class VoteUpdater extends Component {
  state = {
    votes: 0,
    upvote: false,
    downvote: false,
  };

  handleVote = (event) => {
    const { votes } = this.state;
    const { name } = event.target;
    if (this.state[name]) return;
    let newVote = 0;
    newVote = name === "upvote" ? 1 : -1;
    this.setState({ votes: votes + newVote, [name]: true });

    const { id, commentOrArticle } = this.props;
    api.patchVote(id, commentOrArticle, newVote).then((data) => {
      console.dir(data);
    });
  };

  render() {
    const { votes } = this.props;
    const updatedVotes = votes + this.state.votes;

    return (
      <>
        <span>{updatedVotes} votes</span>
        <br></br>
        <button onClick={this.handleVote} name="upvote">
          🙂{" "}
        </button>
        <button onClick={this.handleVote} name="downvote">
          🙁
        </button>
      </>
    );
  }
}

export default VoteUpdater;
