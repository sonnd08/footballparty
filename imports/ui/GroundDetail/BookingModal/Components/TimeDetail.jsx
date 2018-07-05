import React, {Component} from 'react';

export default class TimeDetail extends Component {
    render() {
        return (
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
        );
    }
}