import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../../lib/collections/users'
class AuthorAvatarAndName extends Component {
  render() {
    let {user} = this.props
    // console.log('this.props.name: ', this.props.name);
    // console.log('user: ', user?user.name:'Hao Nguyen');
    return (
      <div className="authorAvatarAndNameContainer">
        <div className="author">
          <div className="avatar">
            <img src={user?user.avatar:this.props.img||"https://dummyimage.com/100x100/000000/ffffff"} alt="" />
          </div>
          <p className="authorName">{user?user.name: this.props.name || 'Hao Nguyen'}</p>
        </div>
      </div>
    );
  }
}

export default withTracker((props)=>{

  let usersSub = Meteor.subscribe('users').ready();
  let user = Users.findOne({_id: props.userId})
  let isReady = usersSub
  // console.log('userId');
  // console.log(props.userId);

  return {
    isReady,
    user
  }
})(AuthorAvatarAndName)