import React, {Component} from 'react';

export default class Step1 extends Component {
    render() {
        return (
            <div className="step1Container">
                <h1 className="title">Book your Match</h1>
                <div className="flexContainer d-flex justify-content-between">
                    <p className="name">Old Trafford Stadium</p>
                    <p className="address">Sir Matt Busby Way, Stretford, Manchester M16 0RA, UK</p>

                    <div className="multiBtnContainer d-flex justify-content-center">
                        <button className="button firstBtn">&lt;</button>
                        <button className="button">OCTOBER 2017</button>
                        <button className="button">
                            &gt;</button>
                    </div>
                </div>

                <div className="datePicker">
                    <div className="multiBtnContainer d-flex justify-content-center">
                        <button className="button firstBtn">&lt;</button>
                        <button className="button passedDate">06</button>
                        <button className="button passedDate">07</button>
                        <button className="button passedDate">08</button>
                        <button className="button currDate">09</button>
                        <button className="button commingDate active">10</button>
                        <button className="button commingDate">11</button>
                        <button className="button commingDate">12</button>
                        <button className="button commingDate">13</button>
                        <button className="button commingDate">14</button>
                        <button className="button commingDate">15</button>
                        <button className="button commingDate">16</button>
                        <button className="button commingDate">17</button>
                        <button className="button commingDate">18</button>
                        <button className="button commingDate">19</button>
                        <button className="button lastBtn">&gt;</button>
                    </div>
                </div>

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
                                <div className="timeDetail">
                                    <div className="dateContainer">
                                        <p className="day">10</p>
																				<div className="date">
																					<p className="dayOfWeek">Monday</p>
																					<p className="monthAndYear">Oct 2017</p>
																				</div>
                                    </div>
                                    {/* {/* <span className="divider">|</span> */}
                                    <div className="time">
																			<div className="d-flex justify-content-between">
                                        <p className="from pr-3">From:</p>
                                        <p className="fromTime">08:00am</p>
																			</div>
																			<div className="d-flex justify-content-between">
                                        <p className="to pr-3">To:</p>
                                        <p className="toTime">09:00am</p>
																			</div>
                                    </div>
                                </div>
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