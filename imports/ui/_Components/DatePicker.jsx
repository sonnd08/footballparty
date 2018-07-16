import React, { Component } from 'react';
import Slider from 'react-slick';
import moment from 'moment'
import { connect } from 'react-redux'
import { setCurrPickedDate } from '../_Redux/Actions/datePicker'

class DatePicker extends Component {
  isActive = (somethingToMatch) => {
    return somethingToMatch === this.props.currPickedDate? 'active' : '';
  }

  render() {
    var settings = {
      arrows: true,
      speed: 500,
      slidesToShow: 16,
      slidesToScroll: 4,
      initialSlide: 0,
      infinite: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      className: "d-flex",
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1690,
          settings: {
            slidesToShow: 17,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }
      ]
    };
    const SUB_DAYS = 10;
    const ADD_DAYS = 20;
    let today = moment();

    let datesBeforeBtn = [];
    let datesAfterBtn = [];
    for (let i = 0; i < SUB_DAYS; i++) {
      let thisDate = moment(today).subtract(SUB_DAYS - i, 'days');
      datesBeforeBtn.push(
        <button
          key={thisDate}
          className={`button passedDate ${this.isActive(thisDate.format('YYYY-DD-MM'))}`}
          onClick={() => this.props.dispatch(setCurrPickedDate(thisDate.format('YYYY-DD-MM')))}
        >
          {thisDate.get('date')}
        </button>)
    }
    for (let i = 0; i < ADD_DAYS; i++) {
      let thisDate = moment(today).add(i + 1, 'days');
      datesAfterBtn.push(
        <button
          key={thisDate}
          className={`button commingDate ${this.isActive(thisDate.format('YYYY-DD-MM'))}`}
          onClick={() => this.props.dispatch(setCurrPickedDate(thisDate.format('YYYY-DD-MM')))}
        >
          {thisDate.get('date')}
        </button>)
    }

    return (
      <div className='col-12'>

        <div className="datePickerContainer">
          <div className="datePicker">
            <div className="multiBtnContainer">
              <Slider {...settings}>
                {datesBeforeBtn.map(btn => btn)}
                <button
                  className={`button currDate ${this.isActive(today.format('YYYY-DD-MM'))}`}
                  onClick={() => this.props.dispatch(setCurrPickedDate(today.format('YYYY-DD-MM')))}
                >
                  {today.get('date')}
                </button>
                {datesAfterBtn.map(btn => btn)}
                {/* <button className="button passedDate">01</button>
                  <button className="button passedDate">02</button>
                  <button className="button passedDate">03</button>
                  <button className="button passedDate">04</button>
                  <button className="button passedDate">05</button>
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
                  <button className="button commingDate">20</button>
                  <button className="button commingDate">21</button>
                  <button className="button commingDate">22</button>
                  <button className="button commingDate">23</button>
                  <button className="button commingDate">24</button>
                  <button className="button commingDate">25</button>
                  <button className="button commingDate">26</button>
                  <button className="button commingDate">27</button>
                  <button className="button commingDate">28</button>
                  <button className="button commingDate">29</button>
                  <button className="button commingDate">30</button>
                  <button className="button commingDate">31</button> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="button lastBtn"
      style={{ ...style }}
      onClick={onClick}
    >&gt;</button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="button firstBtn"
      style={{ ...style }}
      onClick={onClick}
    >&lt;</button>
  );
}


export default connect((state) => {
  return {
    currPickedDate: state.datePicker.currPickedDate
  }
})(DatePicker)