import React, { Component } from 'react';

export default class SearchBar extends Component {

  onInputChange = (e) => {
    this.props.onInputChange(e.target.value)
  }
  render() {
    let classes = `searchBarContainer  ${this.props.classes} `;
    let { value } = this.props
    return (
      <div className={classes}>
        <i className="icon-search" />
        <input
          type="search"
          name=""
          className="searchInput"
          placeholder="Search ground, team or someone..."
          onChange={this.onInputChange}
          value={value}
        />
      </div>
    );
  }
}