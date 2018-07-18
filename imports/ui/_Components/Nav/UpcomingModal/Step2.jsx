import React, {Component} from 'react';
import TimeDetail from '../../TimeDetail'
import StadiumNameAndAddress from '../../StadiumNameAndAddress'
import Rating from '../../Rating'
import AuthorAvatarAndName from '../../AuthorAvatarAndName'
import NumOfPlayers from '../../NumOfPlayers'
import { withTracker } from 'meteor/react-meteor-data';
import { Users } from '../../../../../lib/collections/user_profiles'

class Step2 extends Component {
    render() {
      let {matchDetail, currUserProfile} = this.props;
        return (
            <div className="step1Container step2Container upcomingMoldalStep2">
                <div className="row ">
                    <div className="col-md-8">
                        <h1 className="title">Upcoming Match</h1>
                    </div>
                    <div className="col-md-4">
                        <div className="multiBtnContainer d-flex justify-content-end">
                            <button className="button firstBtn">Add to Calendar</button>
                            <button className="button">Share</button>
                        </div>
                    </div>
                </div>
                
                
                <div className="vsContainer mt-5">
                  <div className="row">
                    <div className="col-md-5 col-sm-12">
                      <div className="teamContainer p-4">
                        <div className="teamAvatar">
                          <img src={matchDetail.firstClub.avatar || "https://dummyimage.com/500x500/000000/ffffff"} alt=""/>
                        </div>
                        <p className="teamName">{matchDetail.firstClub.name}</p>
                        <Rating value={matchDetail.firstClub.rating}/>
                        <div className="teamFooter">
                          <AuthorAvatarAndName
                            name={matchDetail.firstClub.founderName}
                            img={matchDetail.firstClub.founderAvatar}
                            />
                          <NumOfPlayers clubId={matchDetail.firstClub._id?new Mongo.Collection.ObjectID(matchDetail.firstClub._id._str):undefined}/>
                        </div>

                      </div>
                    </div>
                    <div className="vsContainer col-sm-12 col-md-2">
                      <p className="vs">VS</p>
                    </div>
                    <div className="col-md-5 col-sm-12">
                      <div className="teamContainer p-4">
                        <div className="teamAvatar">
                          <img src="https://dummyimage.com/500x500/000000/ffffff" alt=""/>
                        </div>
                        <p className="teamName">Bayern Muchen</p>
                        <Rating value="3.5"/>
                        <div className="teamFooter">
                          <AuthorAvatarAndName
                            name={currUserProfile?currUserProfile.name:undefined}
                            img={currUserProfile?currUserProfile.avatar:undefined}
                          />
                          <NumOfPlayers/>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                <div className="bookingInfoContainer upcomingFooter">
                    <div className="p-4 grayBg">
                        <div className="row">
                            <div className="col-3">
                                <img
                                    className="addressDisplay"
                                    src={matchDetail.ground.imgURL || "https://dummyimage.com/300x300/000000/ffffff"}
                                    alt=""/>
                            </div>
                            <div className="col-9">
                                <StadiumNameAndAddress
                                  name = {matchDetail.ground.name}
                                  address = {matchDetail.ground.address}
                                />
                                <TimeDetail
                                  dateBegin={matchDetail.matchOrigin.dateBegin}
                                  dateEnd={matchDetail.matchOrigin.dateEnd}
                                />
                                <Rating value={matchDetail.ground.rating}/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer upcomingMoldal">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="inviteATeam">
                                <i className="iconPlus icon-plus2"></i>
                                <p >Message Bayern Muchen</p>
                            </div>
                            <p className="tip">0 Unread</p>
                        </div>

                        <div className="col-md-4 sendRequestBtnContainer">
                            <button className="nextStepBtn sendRequestBtn">SEND REQUEST</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default withTracker((props)=>{
  currUserProfile = Users.findOne({meteorUserId: Meteor.userId()})
  return{
    currUserProfile
  }
})(Step2)