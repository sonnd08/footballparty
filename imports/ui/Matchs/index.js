import React, { Component } from 'react';

import MatchsFilter from './MatchsFilter'
import Loading from '../_Components/Loading';
import DatePicker from '../_Components/DatePicker'
import AvatarAndName from '../_Components/AvatarAndName'
import TimeDetail from '../_Components/TimeDetail'
import AuthorAvatarAndName from '../_Components/AuthorAvatarAndName'
import NumOfPlayers from '../_Components/NumOfPlayers'
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../../lib/collections/clubs'
import { Matchs } from '../../../lib/collections/matchs'
import { connect } from 'react-redux'
import { setCurrPickedDate } from '../_Redux/Actions/datePicker'
import moment from 'moment'

class MatchsPage extends Component {
  render() {
    let { isReady, clubs, matchs } = this.props;
    if (!isReady) return <Loading />
    // console.log('in side of Matchs');
    // console.log(clubs);
    return (
      <div className="matchsContainer container">

        <MatchsFilter />
        <div className="row matchPickContainer">
          <DatePicker />

          <div className="matchs mt-5 col-12">
            <div className="row">

              {matchs.map((match, i) => {
                return <div key={i} className="col-md-6">
                  <div className="matchContainer">
                    <div className="topContainer">
                      <AvatarAndName
                        clubId={match.firstClubId}
                        groundId={match.groundId}
                        // img={club.avatar}
                        // name={club.name}
                        // rating={<Rating value={club.rating} />}
                        additional2={<TimeDetail dateBegin={match.dateBegin} dateEnd={match.dateEnd} />}
                      />
                    </div>
                    <div className="matchFooter d-flex justify-content-between">
                      <AuthorAvatarAndName
                        userId={match.founderId}
                      // name={club.founderName}
                      // img={club.founderAvatar}
                      />

                      <NumOfPlayers clubId={match.firstClubId} />

                      <div className="joinBtnContainer ml-auto">
                        <button className="joinBtn">JOIN</button>
                      </div>
                    </div>
                  </div>
                </div>
              })}


            </div>
          </div>

        </div>

        <Loading />
      </div>
    );
  }
}

export default connect(state => {

  return {
    dateToQuery: state.datePicker.currPickedDate
  }
})(withTracker((props) => {
  let matchsSub = Meteor.subscribe('matchs').ready();
  let queryDate = new Date(props.dateToQuery);
  queryDate = queryDate.getTime() + queryDate.getTimezoneOffset()*60*1000;
  // console.log('date1: ', new Date(moment(queryDate).toISOString()));
  // console.log('date2: ', new Date(moment(queryDate.getTime()+24*60*60*1000-1)).toISOString());
  let matchs = Matchs.find({
    dateBegin: { 
      $gte:   new Date(queryDate), 
      $lt:  new Date(queryDate+24*60*60*1000-1)
    }
  }).fetch();
  let isReady = matchsSub;

  return {
    matchs,
    isReady
  };
})(MatchsPage))