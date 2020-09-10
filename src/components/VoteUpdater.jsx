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
        <div className="votes">
          <p>{updatedVote} votes</p>

          <button
            onClick={() => this.handleVote(1, "upvote")}
            name="upvote"
            aria-label="up vote with smiley face"
            disabled={upvote}
          >
            <span>
              <i className="far fa-laugh"></i>
            </span>
          </button>
          <button
            onClick={() => this.handleVote(-1, "downvote")}
            name="downvote"
            aria-label="down vote with sad face"
            disabled={downvote}
          >
            {" "}
            <span>
              <i className="far fa-frown"></i>
            </span>
          </button>
        </div>
      </>
    );
  }
}

export default VoteUpdater;
