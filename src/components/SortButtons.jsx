import React, { Component } from "react";

class SortButtons extends Component {
  state = {
    sort: "",
    order: "desc",
  };

  handleClick = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState((currentState) => {
      return { ...currentState, [name]: value };
    });
    this.handleSubmit(event);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { getArticles, topic, username } = this.props;
    const { sort, order } = this.state;
    getArticles(topic, username, sort, order);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <select id="sort" name="sort" onChange={this.handleClick}>
            <option value="created_at">Date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>
          <select id="order" name="order" onChange={this.handleClick}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </form>
      </>
    );
  }
}

export default SortButtons;
