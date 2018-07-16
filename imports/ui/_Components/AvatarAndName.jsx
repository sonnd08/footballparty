import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../../lib/collections/clubs'
import { Grounds } from '../../../lib/collections/grounds'
import Rating from './Rating'
import { Link } from 'react-router-dom'

class AvatarAndName extends Component {

  render() {
    let classes = `${this.props.classes || ''}`
    let { isReady, clubId, img, club, name } = this.props

    return (
      <span className={`avatarAndNameContainer ${classes}`}>
        <div className="avatar mr-2">
          <img
            src={club ? club.avatar : img || "https://dummyimage.com/100x100/000000/ffffff"}
            alt="" />

          {club
            ? <Rating value={club.rating} />
            : this.props.rating || ''}
        </div>
        <div className="info">
          <p className="name">{club
            ? club.name
            : name || "User name"}</p>
          {this.props.ratingObj}
          {
            this.props.ground
              ? <Link to={`/GroundDetail/${this.props.ground._id._str}`}><p className="additional">{this.props.ground.name}</p></Link>
              : <p className="additional">{this.props.additional || "Additional info"}</p>              
          }
          <div className="additional2">{this.props.additional2}</div>
        </div>
      </span>

    );
  }
}

export default withTracker((props) => {
  if (!props.clubId) return {}
  let clubsSub = Meteor.subscribe('clubs').ready();
  let groundsSub = Meteor.subscribe('grounds').ready();

  let club = Clubs.findOne({ _id: props.clubId });
  let ground = Grounds.findOne({ _id: props.groundId });
  // let isReady = clubsSub && club;
  let isReady = clubsSub && groundsSub && club;
  // console.log('AvatarAndName club:',club);
  return {
    isReady,
    club,
    ground
  }

})(AvatarAndName)