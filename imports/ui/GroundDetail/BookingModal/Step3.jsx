import React, {Component} from 'react';
import TimeDetail from '../../_Components/TimeDetail'
import StadiumNameAndAddress from './Components/StadiumNameAndAddress'
import SearchBar from '../../_Components/SearchBar'
import AvatarAndName from '../../_Components/AvatarAndName'

export default class Step3 extends Component {
    render() {
        return (
            <div className="step1Container step2Container step3Container">
                <h1 className="title">Invite a Team</h1>
                <div className="row mt-4">
                  <div className="col-md-5">
                    <StadiumNameAndAddress/>
                  </div>
                  <div className="col-md-7">
                    <TimeDetail/>
                  </div>
                </div>
                
                <SearchBar classes="style2"/>

                <div className="suggestedTeamsContainer mt-5">
                  <p className="title gray">Suggested Teams</p>
                  <div className="teams">
                    <div className="row">
                      <div className="col-md-6 mb-4 ">
                        <div className="teamContainer p-4  active">
                          <AvatarAndName classes="avatarSquare"/>
                          <i className="checkMark icon-checkmark"></i>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 ">
                        <div className="teamContainer p-4">
                          <AvatarAndName classes="avatarSquare"/>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 ">
                        <div className="teamContainer p-4">
                          <AvatarAndName classes="avatarSquare"/>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 ">
                        <div className="teamContainer p-4">
                          <AvatarAndName classes="avatarSquare"/>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="inviteATeam cancelBtn">
                                <i className="iconCross mr-3">x</i>
                                <p >Cancel</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <button className="nextStepBtn">Send Invite</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}