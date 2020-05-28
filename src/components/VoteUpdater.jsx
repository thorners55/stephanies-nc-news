import React, { Component } from "react";
import * as api from "../utils/api.js";

class VoteUpdater extends Component {
  state = {
    votes: 0,
    upvote: false,
    downvote: false,
  };

  handleVote = (event) => {
    const { name } = event.target;
    if (this.state[name]) return;
    let newVote = 0;
    newVote = name === "upvote" ? 1 : -1;
    this.setState({ votes: newVote, [name]: true });

    const { articleId } = this.props;
    api.patchVote(articleId, newVote).then((article) => {
      console.dir(article);
    });
  };

  render() {
    const { votes } = this.props;
    const updatedVotes = votes + this.state.votes;
    console.log(this.state);
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
