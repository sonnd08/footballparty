import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../../lib/collections/clubs'
import { Users } from '../../../lib/collections/users'

 class NumOfPlayers extends Component {
  render() {
    let {value, isReady, usersCount} = this.props;
    if(!isReady) return ''
    return (
      <div className="numOfPlayersContainer">
        <p className="numOfPlayers">{value || usersCount || '8'}&nbsp;Players</p>
      </div>
    );
  }
}

export default withTracker((props)=>{
  let isReady = Meteor.subscribe('users').ready();
  let usersCount = Users.find({clubs:props.clubId}).count();
  return{
    props,
    isReady,
    usersCount
  }
})(NumOfPlayers)