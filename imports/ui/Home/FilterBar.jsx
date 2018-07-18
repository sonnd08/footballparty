import React, { Component } from 'react';
import SearchBar from '../_Components/SearchBar';
import { setGroundsFilterPrice, setGroundsFilterKeyword,setGroundsFilterRating } from '../_Redux/Actions/filters'
import { connect } from 'react-redux'
class FilterBar extends Component {
  onSortByRating = (e)=>{
    this.props.dispatch(setGroundsFilterRating(e.target.value));
  }
  onSearchType = (input)=>{
    this.props.dispatch(setGroundsFilterKeyword(input));
  }
  onFilterByPrice = (e) => {
    let dataset = e.target.options[e.target.selectedIndex].dataset;
    this.props.dispatch(setGroundsFilterPrice(dataset.price1, dataset.price2, e.target.value));
  }
  render() {
    return (
      <div className="row filterContainer">
        <div className="col-lg-2">
          <p className="title">Grounds</p>
        </div>

        <div className="col-lg-7">
          <div className="selectOptions">
            <select name="rating" id="" value={this.props.rating} onChange={this.onSortByRating}>
              <option value="0">All Stars</option>
              <option value="1">> 1 Stars</option>
              <option value="2">> 2 Stars</option>
              <option value="3">> 3 Stars</option>
              <option value="4">> 4 Stars</option>
              <option value="5">> 5 Stars</option>
            </select>
            {/* <select name="distance" id="">
              <option value="Nearest">Nearest</option>
              <option value="Farest">Farest</option>
            </select> */}


            <select name="price" id="" value={this.props.priceOptionIndex} onChange={this.onFilterByPrice} >
              <option value="0" data-price1={null} data-price2={null}>All price</option>
              <option value="1" data-price1={null} data-price2={20}>&lt; $20</option>
              <option value="2" data-price1={20} data-price2={50}>$20 ~ $50</option>
              <option value="3" data-price1={50} data-price2={null}>&gt; $50</option>
            </select>

            {/* <select name="available" id="">
              <option value="Available Only">Available Only</option>
              <option value="Not Available">Not Available</option>
              <option value="All">All</option>
            </select> */}
          </div>
        </div>

        <div className="col-lg-3 justify-content-end">
          <SearchBar classes="style2"  onInputChange={this.onSearchType} value={this.props.keyword}  />
        </div>
      </div>
    );
  }
}

export default connect(state=>{return {
  keyword: state.filters.Grounds.keyword,
  priceOptionIndex: state.filters.Grounds.price.priceOptionIndex,
  rating: state.filters.Grounds.rating,
}})(FilterBar)