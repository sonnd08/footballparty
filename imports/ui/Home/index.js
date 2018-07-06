import React, { Component } from 'react';

import Item from './Item'
import FilterBar from './FilterBar'
import Loading from '../_Components/Loading';
import UpcomingModal from './UpcomingModal'


export default class Body extends Component {
  render() {
   

    return (
        <div className="MainBody container">
            <UpcomingModal/>
            <FilterBar/>
            <div className="row content">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>

            <Loading/>
        </div>
    );
  }
}