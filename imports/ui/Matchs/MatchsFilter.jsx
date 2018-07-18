import React, { Component } from 'react';
import SearchBar from '../_Components/SearchBar';
import { connect } from 'react-redux'
import { setMatchsFilterKeyword, setMatchsFilterPrice, setMatchsFilterTime} from '../_Redux/Actions/filters'
import _ from 'lodash'
class MatchsFilter extends Component {

  onSearchType = (input)=>{
    this.props.dispatch(setMatchsFilterKeyword(input));
  }

  onSortByPrice = (e)=>{
    var dataset = e.target.options[e.target.selectedIndex].dataset;
    this.props.dispatch(setMatchsFilterPrice(dataset.price1, dataset.price2, e.target.value));
  }
  // onSortByRating = (e)=>{
  //   this.props.dispatch(setMatchsFilterRating(e.target.value));
  // }
  onSortByTime = (e)=>{
    this.props.dispatch(setMatchsFilterTime(e.target.value));
  }
  render() {
    let {keyword} = this.props
    // console.log('this.props.priceOptionIndex', this.props.priceOptionIndex);
    return (
      <div className="row matchsFilterContainer filterContainer">
        <div className="col-lg-2">
          <p className="title">Matchs</p>
        </div>

        <div className="col-lg-4">
          <div className="selectOptions">
            <select value={this.props.timeOrder} name="time" id="" onChange={this.onSortByTime}>
              {/* <option value="Time">Time</option> */}
              <option value="-1" >Time: Desc</option>
              <option value="1" >Time: Asc</option>
            </select>

            <select name="price" id="" value={this.props.priceOptionIndex} onChange={this.onSortByPrice} >
              <option value="0" data-price1={null} data-price2={null}>All price</option>
              <option value="1" data-price1={null} data-price2={20}>&lt; $20</option>
              <option value="2" data-price1={20} data-price2={50}>$20 ~ $50</option>
              <option value="3" data-price1={50} data-price2={null}>&gt; $50</option>
            </select>
          </div>
        </div>

        <div className="col-lg-6 ">
          <div className="row align-items-center">
            <div className="col-7">
              <SearchBar classes="style2" onInputChange={this.onSearchType} value={keyword} />
            </div>
            <div className="col-5 d-flex justify-content-end">
              <button className="quickMatchBtn"><i className="icon-quickMatchIcon"></i>QUICK MATCH</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(state => {
  return {
    keyword: state.filters.Matchs.keyword,
    timeOrder: state.filters.Matchs.time.order,
    priceOptionIndex: state.filters.Matchs.priceOptionIndex,
  }
})(MatchsFilter)