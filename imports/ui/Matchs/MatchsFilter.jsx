import React, { Component } from 'react';
import SearchBar from '../_Components/SearchBar';
import { connect } from 'react-redux'
import { setMatchsFilterKeyword, setMatchsFilterPrice} from '../_Redux/Actions/filters'
import _ from 'lodash'
class MatchsFilter extends Component {

  onSearchType = _.debounce((input)=>{
    this.props.dispatch(setMatchsFilterKeyword(input));
  }, 300)

  onSortByPrice = (e)=>{
    var dataset = e.target.options[e.target.selectedIndex].dataset;
    this.props.dispatch(setMatchsFilterPrice(dataset.price1, dataset.price2));
  }
  render() {
    let {keyword} = this.props
    return (
      <div className="row matchsFilterContainer filterContainer">
        <div className="col-lg-2">
          <p className="title">Matchs</p>
        </div>

        <div className="col-lg-4">
          <div className="selectOptions">
            <select name="distance" id="">
              <option value="Nearest">Nearest</option>
              <option value="Farest">Farest</option>
            </select>

            <select name="price" id="" onChange={this.onSortByPrice}>
              <option value="Nearest" data-price1={null} data-price2={null}>All price</option>
              <option value="Nearest" data-price1={null} data-price2={20}>&lt; $20</option>
              <option value="Farest" data-price1={20} data-price2={50}>$20 ~ $50</option>
              <option value="Farest" data-price1={50} data-price2={null}>&gt; $50</option>
            </select>
          </div>
        </div>

        <div className="col-lg-6 ">
          <div className="row align-items-center">
            <div className="col-7">
              <SearchBar classes="style2" onInputChange={this.onSearchType} />
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
    keyword: state.filters.Matchs.keyword
  }
})(MatchsFilter)