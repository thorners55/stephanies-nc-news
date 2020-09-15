import React, { Component } from "react";

class SortButtons extends Component {
  state = {
    sort: "created_at",
    order: "desc",
  };

  handleClick = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    console.log(name, value, "handleClick");
    this.setState((currentState) => {
      return { ...currentState, [name]: value };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.sort !== prevState.sort ||
      this.state.order !== prevState.order
    ) {
      const { getArticles, topic, username } = this.props;
      console.log(this.state.sort, this.state.order);
      const { sort, order } = this.state;
      getArticles(topic, username, sort, order);
    }
  }

  render() {
    return (
      <div id="sort-dropdowns">
        <form onSubmit={this.handleSubmit}>
          <select
            id="sort"
            name="sort"
            aria-label="sort by"
            onChange={this.handleClick}
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>
          <select
            id="order"
            name="order"
            aria-label="order by"
            onChange={this.handleClick}
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SortButtons;
