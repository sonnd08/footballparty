import React, { Component } from 'react';
import Loading from '../_Components/Loading';
import AvatarAndName from '../_Components/AvatarAndName'
import TimeDetail from '../_Components/TimeDetail'
import AuthorAvatarAndName from '../_Components/AuthorAvatarAndName'
import NumOfPlayers from '../_Components/NumOfPlayers'
import { withTracker } from 'meteor/react-meteor-data';
import { Matchs } from '../../../lib/collections/matchs'
import { Clubs } from '../../../lib/collections/clubs'
import { Users } from '../../../lib/collections/user_profiles'
import { Grounds } from '../../../lib/collections/grounds'
import { connect } from 'react-redux'
import {toggleUpcomingModal} from '../_Redux/Actions/toggleModal'

class MatchsContainer extends Component {
  onJoinClicked =(e)=>{
    this.props.dispatch(toggleUpcomingModal(JSON.parse(e.target.dataset.populatedMatchInfo)));
  }
  render() {
    let { isReady, clubs, matchs } = this.props;
    if (!isReady) return <Loading />
    return (
      <div className="row">
        {matchs.map((match, i) => {

          let firstClub = Clubs.findOne({ _id: match.firstClubId });
          // let firstClubFounder = firstClub?Users.findOne({ _id: firstClub.founderId}):{};
          let ground = Grounds.findOne({ _id: match.groundId });
          let firstClubPlayers = Users.find({clubs:match.firstClubId}).count();
          let populatedMatchInfo ={
            matchOrigin: match,
            firstClub,
            firstClubPlayers,
            // firstClubFounder,
            ground
          }


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
                  <button data-populated-match-info={JSON.stringify(populatedMatchInfo)} className="joinBtn" onClick={this.onJoinClicked}>JOIN</button>
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
    keyword: state.filters.Matchs.keyword,
    priceQuery: state.filters.Matchs.priceQuery,
    timeOrder: state.filters.Matchs.time.order,

  }
})(withTracker((props) => {
  let matchsSub = Meteor.subscribe('matchs').ready();
  let clubsSub = Meteor.subscribe('clubs').ready();
  let groundsSub = Meteor.subscribe('grounds').ready();

  const matchedClubs = Clubs.find({ name: new RegExp(`.*${props.keyword}.*`, 'i') }).map(club => club._id);
  const matchedGrounds = Grounds.find({ price: props.priceQuery }).map(ground => ground._id);



  let queryDate = new Date(props.dateToQuery);
  queryDate = queryDate.getTime() + queryDate.getTimezoneOffset() * 60 * 1000;

  let matchs = Matchs.find(
    {
      dateBegin: {
        $gte: new Date(queryDate),
        $lt: new Date(queryDate + 24 * 60 * 60 * 1000 - 1)
      },
      firstClubId: { $in: matchedClubs },
      groundId: { $in: matchedGrounds },
    },
    { sort: { dateBegin: props.timeOrder } }
  ).fetch();
  let isReady = matchsSub && clubsSub && groundsSub;

  return {
    matchs,
    isReady
  };
})(MatchsContainer))