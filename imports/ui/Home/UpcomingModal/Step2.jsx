import React, {Component} from 'react';
import TimeDetail from '../../_Components/TimeDetail'
import StadiumNameAndAddress from '../../_Components/StadiumNameAndAddress'
import Rating from '../../_Components/Rating'

export default class Step2 extends Component {
    render() {
        return (
            <div className="step1Container step2Container">
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
                
                <p className="bookedNotification">Your Booking has been Issued!</p>

                <div className="bookingInfoContainer">
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

                <div className="vsContainer">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="teamContainer">
                        <img src="https://dummyimage.com/500x500/000000/ffffff" alt="" className="avatar"/>
                        <p className="teamName">Bayern Muchen</p>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="inviteATeam">
                                <i className="iconPlus icon-plus2"></i>
                                <p >Invite a Team</p>
                            </div>
                            <p className="tip">( You can do it later in your match management page )</p>
                        </div>

                        <div className="col-md-3">
                            <button className="nextStepBtn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}