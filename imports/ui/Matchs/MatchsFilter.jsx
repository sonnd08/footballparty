import React, {Component} from 'react';
import SearchBar from '../_Components/SearchBar';

export default class MatchsFilter extends Component {
    render() {

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

                        <select name="price" id="">
                            <option value="Nearest">&#60; $10</option>
                            <option value="Farest">$10 ~ $30</option>
                            <option value="Farest">$10 ~ $30</option>
                        </select>
                    </div>
                </div>

                <div className="col-lg-6 ">
                    <div className="row align-items-center">
                        <div className="col-7">
                            <SearchBar classes="style2"/>
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