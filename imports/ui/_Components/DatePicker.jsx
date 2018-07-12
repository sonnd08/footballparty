import React, {Component} from 'react';
import AvatarAndName from './AvatarAndName';
import Slider from 'react-slick';

export default class Comment extends Component {
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
        className:"d-flex",
        swipeToSlide:true,
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

        return (
          <div className='col-12'>
        
            <div className="datePickerContainer">
                <div className="datePicker">
                    <div className="multiBtnContainer">
                      <Slider {...settings}>
                        <button className="button passedDate">01</button>
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
                        <button className="button commingDate">31</button>
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
      style={{ ...style}}
      onClick={onClick}
    >&gt;</button>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button 
      className="button firstBtn" 
      style={{ ...style}}
      onClick={onClick} 
    >&lt;</button>
  );
}