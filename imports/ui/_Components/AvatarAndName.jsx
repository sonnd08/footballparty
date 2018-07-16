import React, {Component} from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Clubs } from '../../../lib/collections/clubs'
import Rating from './Rating'

class AvatarAndName extends Component {

    render() {
        let classes = `${this.props.classes || ''}`
        let {isReady, clubId, img, club, name} = this.props
        if(!isReady) return (
            <span className={`avatarAndNameContainer ${classes}`}>
                <div className="avatar mr-2">
                    <img
                        src={img || "https://dummyimage.com/100x100/000000/ffffff"}
                        alt=""/>

                    {this.props.rating || ''}
                </div>
                <div className="info">
                    <p className="name">{name || "User name"}</p>
                    {this.props.ratingObj}
                    <p className="additional">{this.props.additional || "Additional info"}</p>
                    <div className="additional2">{this.props.additional2}</div>
                </div>
            </span>

        );
        // console.log(club);

        return (
            <span className={`avatarAndNameContainer ${classes}`}>
                <div className="avatar mr-2">
                    <img
                        src={club.avatar || img || "https://dummyimage.com/100x100/000000/ffffff"}
                        alt=""/>

                    {<Rating value={club.rating || rating || ''} />}
                </div>
                <div className="info">
                    <p className="name">{club.name||name || "User name"}</p>
                    {this.props.ratingObj}
                    <p className="additional">{this.props.additional || "Additional info"}</p>
                    <div className="additional2">{this.props.additional2}</div>
                </div>
            </span>

        );
    }
}

export default withTracker((props)=>{
  if(!props.clubId) return {}
  let clubsSub = Meteor.subscribe('clubs').ready();

  let club = Clubs.findOne({_id:props.clubId});
  // let isReady = clubsSub && club;
  let isReady = clubsSub && club;
  // console.log('AvatarAndName club:',club);
  return{
    isReady,
    club,
  }

})(AvatarAndName)