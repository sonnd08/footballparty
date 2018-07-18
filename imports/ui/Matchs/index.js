import React, { Component } from 'react';

import MatchsFilter from './MatchsFilter'
import Loading from '../_Components/Loading';
import DatePicker from '../_Components/DatePicker'
import MatchsContainer from './matchsContainer';

export default class MatchsPage extends Component {
  render() {
    return (
      <div className="matchsContainer container">

        <MatchsFilter />
        <div className="row matchPickContainer">
          <DatePicker />

          <div className="matchs mt-5 col-12">
              <MatchsContainer />
          </div>

        </div>

        <Loading />
      </div>
    );
  }
}