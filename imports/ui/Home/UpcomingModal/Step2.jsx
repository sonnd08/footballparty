import React, {Component} from 'react';
import TimeDetail from '../../_Components/TimeDetail'
import StadiumNameAndAddress from '../../_Components/StadiumNameAndAddress'
import Rating from '../../_Components/Rating'
import AuthorAvatarAndName from '../../_Components/AuthorAvatarAndName'
import NumOfPlayers from '../../_Components/NumOfPlayers'

export default class Step2 extends Component {
    render() {
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
                          <img src="https://dummyimage.com/500x500/000000/ffffff" alt=""/>
                        </div>
                        <p className="teamName">Bayern Muchen</p>
                        <Rating value="3.5"/>
                        <div className="teamFooter">
                          <AuthorAvatarAndName/>
                          <NumOfPlayers/>
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
                          <AuthorAvatarAndName/>
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
                                    src="https://dummyimage.com/300x300/000000/ffffff"
                                    alt=""/>
                            </div>
                            <div className="col-9">
                                <StadiumNameAndAddress/>
                                <TimeDetail/>
                                <Rating value="3.5"/>
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