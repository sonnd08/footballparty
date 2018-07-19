import React, { Component } from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleNavAvatar, updateCurrUserId } from '../../../_Redux/Actions/nav'
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../../../../lib/collections/user_profiles'

class NavAvatar extends Component {

  toggleNavAvatar = () => {
    this.props.dispatch(toggleNavAvatar())
  }
  render() {

    // console.log('userProfile', this.props.userProfile);
    // console.log('props.currUser', this.props.currUser);
    // console.log(this.props.currUser);
    return (
      <div className="avatarContainer"
      // onClick={this.toggleNavAvatar}
      >
        <img src={this.props.userProfile ? this.props.userProfile.avatar || "https://dummyimage.com/35x35/ffffff/000000" : ''} alt="" className="avatar" />
        {/* <div className="downArrow"></div>
        <div className="avatarDropdown" style={{display:this.props.dropdownDisplay}}>
          <p>User Profiles</p>
          <p>Logout</p>
        </div> */}
      </div>
    );
  }
}

function mapStatetoProps(state) {
  // console.log(store);
  return {
    dropdownDisplay: state.nav.dropdownDisplay,
  }
};
export default connect(mapStatetoProps)(
  withTracker((props) => {
    let userProfile
    if (props.currUser) {
      userProfile = Users.findOne({ meteorUserId: props.currUser._id })
    }
    return {
      userProfile
    }
  })(NavAvatar))