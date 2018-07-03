import React, { Component } from 'react';

import Item from './Item'

export default class MainBody extends Component {
  render() {
   

    return (
        <div className="MainBody container">
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