import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../../lib/collections/clubs'
import { Users } from '../../../lib/collections/users'

 class NumOfPlayers extends Component {
  render() {
    let {value, isReady, users} = this.props;
    console.log('isReady');
    console.log(isReady);
    if(!isReady) return ''
    return (
      <div className="numOfPlayersContainer">
        <p className="numOfPlayers">{value || users.length || '8'}&nbsp;Players</p>
      </div>
    );
  }
}

export default withTracker((props)=>{
  console.log('props');
  let isReady = Meteor.subscribe('users').ready();
  let users = Users.find({clubs:props.clubId}).fetch();
  console.log(props.clubId);
  console.log(users);
  return{
    props,
    isReady,
    users
  }
})(NumOfPlayers)