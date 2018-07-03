import React, { Component } from 'react';

import Item from './Item'
import FilterBar from './FilterBar'

export default class MainBody extends Component {
  render() {
   

    return (
        <div className="MainBody container">

            <FilterBar/>
            <div className="row content">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </div>
    );
  }
}