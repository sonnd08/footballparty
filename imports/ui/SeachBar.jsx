import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    let classes = `searchBarContainer  ${this.props.classes} `;

    return (
        <div className={classes}>
            <i class="icon-search2"/>
            <input type="search" name="" className="seachInput" placeholder="Search ground, team or someone..."/>
        </div>
    );
  }
}