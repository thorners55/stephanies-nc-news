import React, { Component } from "react";
import * as api from "../utils/api.js";

class VoteUpdater extends Component {
  state = {
    votes: 0,
    upvote: false,
    downvote: false,
  };

  handleVote = (newVote, button) => {
    this.setState((currentState) => {
      return { votes: currentState.votes + newVote, [button]: true };
    });
    const { id, commentOrArticle } = this.props;

    api.patchVote(id, commentOrArticle, newVote);
  };

  render() {
    const { votes } = this.props;
    const { upvote, downvote } = this.state;
    const updatedVote = votes + this.state.votes;

    return (
      <>
        <section>
          {updatedVote} votes
          <br></br>
          <button
            onClick={() => this.handleVote(1, "upvote")}
            name="upvote"
            disabled={upvote}
          >
            <span role="img" aria-label="Happy face emoji">
              🙂{" "}
            </span>
          </button>
          <button
            onClick={() => this.handleVote(-1, "downvote")}
            name="downvote"
            disabled={downvote}
          >
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
