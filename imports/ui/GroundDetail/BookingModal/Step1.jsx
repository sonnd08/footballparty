import React, {Component} from 'react';
import DatePicker from '../../_Components/DatePicker'
import TimeDetail from './Components/TimeDetail'

export default class Step1 extends Component {
    render() {
        return (
            <div className="step1Container">
                <h1 className="title">Book your Match</h1>
                <div className="flexContainer d-flex justify-content-between">
                    <div className="stadiumInfo">
                      <p className="name">Old Trafford Stadium</p>
                      <p className="address">Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK</p>
                    </div>

                    <div className="multiBtnContainer d-flex justify-content-center">
                        <button className="button firstBtn">&lt;</button>
                        <button className="button">OCTOBER 2017</button>
                        <button className="button">
                            &gt;</button>
                    </div>
                </div>

                <DatePicker/>

                <div className="visualizedScheduleContainer">
                    <table>
                        <tbody>
                            <tr className="visualizedSchedule">
                                <td className="active" colSpan="2">Your Booking</td>
                                <td className="none" colSpan="2"></td>
                                <td className="unavailable" colSpan="3">Unavailable</td>
                                <td className="openning" colSpan="2">FC Barcelona</td>
                                <td className="openning" colSpan="1">FC Barcelona</td>
                                <td className="none" colSpan="1"></td>
                            </tr>
                            <tr className="visualizedTime">
                                <td className="time">08:00am</td>
                                <td className="time">09:00am</td>
                                <td className="time">10:00am</td>
                                <td className="time">11:00am</td>
                                <td className="time">12:00am</td>
                                <td className="time">13:00am</td>
                                <td className="time">14:00am</td>
                                <td className="time">15:00am</td>
                                <td className="time">16:00am</td>
                                <td className="time">17:00am</td>
                                <td className="time">18:00am</td>
                            </tr>
                        </tbody>
                    </table>

                    <input id="openMatch" className="mt-3 mr-2" type="checkbox" name="openMatch"/>
                    <label htmlFor="openMatch">Open Match</label>

                    <div className="footer">
                        <div className="row">

                            <div className="col-lg-6 col-sm-12">
                                <span className="tip">Select “Open Match” to get your match available for other
                                    teams to join.You can also join an someone’s Openning Match</span>
                            </div>

                            <div className="col-lg-6 col-sm-12">
														<div className="row">
															<div className="col-md-8">
                                <TimeDetail/>
															</div>

															<div className="col-md-4">
																<button className="nextStepBtn">Next</button>
															</div>
														</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}