import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
   

    return (
        <div className="searchBarContainer">
            <i class="icon-search2"/>
            <input type="search" name="" className="seachInput" placeholder="Search ground, team or someone..."/>
        </div>
    );
  }
}