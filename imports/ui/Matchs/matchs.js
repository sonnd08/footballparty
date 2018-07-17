import React, { Component } from 'react';
import Loading from '../_Components/Loading';
import AvatarAndName from '../_Components/AvatarAndName'
import TimeDetail from '../_Components/TimeDetail'
import AuthorAvatarAndName from '../_Components/AuthorAvatarAndName'
import NumOfPlayers from '../_Components/NumOfPlayers'
import { withTracker } from 'meteor/react-meteor-data';
import { Matchs } from '../../../lib/collections/matchs'
import { connect } from 'react-redux'

class MatchsContainer extends Component {
  render() {
    let { isReady, clubs, matchs } = this.props;
    if (!isReady) return <Loading />
    return (
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
      </div >
    );
  }
}

export default connect(state => {

  return {
    dateToQuery: state.datePicker.currPickedDate,
    keyword: state.filters.Matchs.keyword
  }
})(withTracker((props) => {
  let matchsSub = Meteor.subscribe('matchs', props.keyword).ready();
  // let clubsSub = Meteor.subscribe('matchs').ready();
  let queryDate = new Date(props.dateToQuery);
  queryDate = queryDate.getTime() + queryDate.getTimezoneOffset() * 60 * 1000;
  // console.log('date1: ', new Date(moment(queryDate).toISOString()));
  // console.log('date2: ', new Date(moment(queryDate.getTime()+24*60*60*1000-1)).toISOString());
  let matchs = Matchs.find({
    dateBegin: {
      $gte: new Date(queryDate),
      $lt: new Date(queryDate + 24 * 60 * 60 * 1000 - 1)
    }
  }).fetch();
  let isReady = matchsSub;

  return {
    matchs,
    isReady
  };
})(MatchsContainer))