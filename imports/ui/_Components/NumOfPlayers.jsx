import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../../lib/collections/clubs'
import { Users } from '../../../lib/collections/users'

 class NumOfPlayers extends Component {
  render() {
    let {value, isReady, users} = this.props;
    if(!isReady) return ''
    return (
      <div className="numOfPlayersContainer">
        <p className="numOfPlayers">{value || users.length || '8'}&nbsp;Players</p>
      </div>
    );
  }
}

export default withTracker((props)=>{
  let isReady = Meteor.subscribe('users').ready();
  let users = Users.find({clubs:props.clubId}).fetch();
  return{
    props,
    isReady,
    users
  }
})(NumOfPlayers)