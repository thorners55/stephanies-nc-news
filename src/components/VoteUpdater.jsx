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
        <section>
          {updatedVotes} votes
          <br></br>
          <button onClick={this.handleVote} name="upvote">
            <span role="img" aria-label="Happy face emoji">
              🙂{" "}
            </span>
          </button>
          <button onClick={this.handleVote} name="downvote">
            {" "}
            <span role="img" aria-label="Sad face emoji">
              🙁
            </span>
          </button>
        </section>
      </>
    );
  }
}

export default VoteUpdater;
