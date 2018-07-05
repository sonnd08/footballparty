import React, {Component} from 'react';
import TimeDetail from './Components/TimeDetail'
import StadiumNameAndAddress from './Components/StadiumNameAndAddress'
import SearchBar from '../../SearchBar'

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