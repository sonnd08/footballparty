import React, { Component } from 'react';

import FilterBar from '../Home/FilterBar'
import Loading from '../_Components/Loading';

export default class Matchs extends Component {
  render() {
   

    return (
        <div className="matchsContainer container">

            <FilterBar/>
            <div className="row content">
            </div>

            <Loading/>
        </div>
    );
  }
}