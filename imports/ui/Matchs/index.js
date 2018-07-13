import React, { Component } from 'react';

import MatchsFilter from './MatchsFilter'
import Loading from '../_Components/Loading';
import DatePicker from '../_Components/DatePicker'
import AvatarAndName from '../_Components/AvatarAndName'
import Rating from '../_Components/Rating'
import TimeDetail from '../_Components/TimeDetail'
import AuthorAvatarAndName from '../_Components/AuthorAvatarAndName'
import NumOfPlayers from '../_Components/NumOfPlayers'
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../../lib/collections/clubs'
import { Users } from '../../../lib/collections/users'

class Matchs extends Component {
  render() {
    let { isReady, clubs } = this.props;
    if (!isReady) return <Loading />
    // console.log('in side of Matchs');
    // console.log(clubs);
    return (
      <div className="matchsContainer container">

        <MatchsFilter />
        <div className="row matchPickContainer">
          <DatePicker />

          <div className="matchs mt-5">
            <div className="row">

              {clubs.map((club, i) => {
                return <div key={i} className="col-md-6">
                  <div className="matchContainer">
                    <div className="topContainer">
                      <AvatarAndName
                        img={club.avatar}
                        name={club.name}
                        rating={<Rating value={club.rating} />}
                        additional2={<TimeDetail />}
                      />
                    </div>
                    <div className="matchFooter d-flex justify-content-between">
                      <AuthorAvatarAndName 
                        name={club.founderName}
                        img={club.founderAvatar}
                      />

                      <NumOfPlayers value={()=>{
                        Users.find({clubs})
                      }}/>

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

export default withTracker(() => {
  let clubsSub = Meteor.subscribe('clubs').ready();
  Meteor.subscribe('Users');
  let clubs = Clubs.find({}).fetch();
  let isReady = clubsSub;
  
  // console.log('clubsSub:', clubsSub);
  // console.log('clubs:', clubs);
  // console.log('isReady: ', isReady);
  return {
    clubs,
    isReady
  };
})(Matchs)