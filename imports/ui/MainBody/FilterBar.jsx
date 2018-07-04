import React, { Component } from 'react';

export default class FilterBar extends Component {
  render() {
   

    return (
        <div className="row filterContainer">
            <div className="col-lg-2">
                <p className="title">Grounds</p>
            </div>
            
            <div className="col-lg-7">
                <div className="selectOptions">
                    <select name="distance" id="">
                        <option value="Nearest">Nearest</option>
                        <option value="Farest">Farest</option>
                    </select>
                    
                    <select name="price" id="">
                        <option value="Nearest">&#60; $10</option>
                        <option value="Farest">$10 ~ $30</option>
                        <option value="Farest">$10 ~ $30</option>
                    </select>

                    <select name="available" id="">
                        <option value="Available Only">Available Only</option>
                        <option value="Not Available">Not Available</option>
                        <option value="All">All</option>
                    </select>
                </div>
            </div>

            <div className="col-lg-3 justify-content-end">
                <input className="searchBar" type="search" name="" id=""/>
            </div>
        </div>
    );
  }
}