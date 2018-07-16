import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../../lib/collections/users'
class AuthorAvatarAndName extends Component {
  render() {
    let {user} = this.props
    console.log('user');
    console.log(user);
    return (
      <div className="authorAvatarAndNameContainer">
        <div className="author">
          <div className="avatar">
            <img src={this.props.img || user?user.avatar:"https://dummyimage.com/100x100/000000/ffffff"} alt="" />
          </div>
          <p className="authorName">{this.props.name || user?user.name:'Hao Nguyen'}</p>
        </div>
      </div>
    );
  }
}

export default withTracker((props)=>{

  let usersSub = Meteor.subscribe('users').ready();
  let user = Users.findOne({_id: props.userId})
  let isReady = usersSub
  console.log('userId');
  console.log(props.userId);

  return {
    isReady,
    user
  }
})(AuthorAvatarAndName)