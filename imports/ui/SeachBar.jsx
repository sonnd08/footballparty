import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    let classes = `searchBarContainer  ${this.props.classes || ''} `;

    return (
        <div className={classes}>
            <i className="icon-search2"/>
            <input type="search" name="" className="style2" placeholder="Search ground, team or someone..."/>
        </div>
    );
  }
}