import React, {Component} from 'react';
import TimeDetail from '../../_Components/TimeDetail'
import StadiumNameAndAddress from '../../_Components/StadiumNameAndAddress'
export default class Step2 extends Component {
    render() {
        return (
            <div className="step1Container step2Container">
                <h1 className="title">Completed</h1>
                <div className="logoContainer">
                  <i className="logoIcon icon-logoIco">
                    <i className="checkMark icon-checkmark"></i>
                  </i>
                </div>

                <p className="bookedNotification">Your Booking has been Issued!</p>

                <div className="bookingInfoContainer">
                  <div className="p-4 grayBg">
                    <div className="row">
                      <div className="col-3">
                        <img className="addressDisplay" src="https://dummyimage.com/300x300/000000/ffffff" alt=""/>
                      </div>
                      <div className="col-9">
                        <StadiumNameAndAddress/>
                        <TimeDetail/>
                      </div>
                    </div>
                  </div>
                  <div className="multiBtnContainer d-flex justify-conten-center">
                    <button className="btn button p-3 firstBtn">Add to Calendar</button>
                    <button className="btn button p-3 ">Share</button>
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