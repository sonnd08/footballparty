import React, { Component } from 'react';

import MatchsFilter from './MatchsFilter'
import Loading from '../_Components/Loading';
import DatePicker from '../_Components/DatePicker'
export default class Matchs extends Component {
  render() {
   

    return (
        <div className="matchsContainer container">

            <MatchsFilter/>
            <div className="row matchPickContainer">
              <DatePicker/>
              
            </div>

            <Loading/>
        </div>
    );
  }
}