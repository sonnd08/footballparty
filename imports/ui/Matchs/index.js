import React, { Component } from 'react';

import MatchsFilter from './MatchsFilter'
import Loading from '../_Components/Loading';

export default class Matchs extends Component {
  render() {
   

    return (
        <div className="matchsContainer container">

            <MatchsFilter/>
            <div className="row content">
            </div>

            <Loading/>
        </div>
    );
  }
}