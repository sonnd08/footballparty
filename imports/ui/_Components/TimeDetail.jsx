import React, { Component } from 'react';
import moment from 'moment'

export default class TimeDetail extends Component {
  render() {
    let dateBegin = new Date(this.props.dateBegin)
    let dateEnd = new Date(this.props.dateEnd)
    // console.log('dateBegin', dateBegin);
    // console.log('dateBegin.getMonth()', dateBegin.getFullYear());
    return (
      <div className="timeDetail">
        <div className="dateContainer">
          <p className="day">{dateBegin.getDate() || '10'}</p>
          <div className="date">
            <p className="dayOfWeek">
              {dateBegin ? moment(dateBegin).format('dddd') : 'Monday'}
            </p>
            <p className="monthAndYear">
              {dateBegin ? `${moment(dateBegin).format('MMM YYYY')}` : 'Oct 2017'}
            </p>
          </div>
        </div>
        {/* {/* <span className="divider">|</span> */}
        <div className="time">
          <div className="d-flex justify-content-between">
            <p className="from pr-3">From:</p>
            <p className="fromTime">{moment(dateBegin).format('hh:mma')}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="to pr-3">To:</p>
            <p className="toTime">{moment(dateEnd).format('hh:mma')}</p>
          </div>
        </div>
      </div>
    );
  }
}