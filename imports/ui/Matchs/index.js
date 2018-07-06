import React, { Component } from 'react';

import MatchsFilter from './MatchsFilter'
import Loading from '../_Components/Loading';
import DatePicker from '../_Components/DatePicker'
import AvatarAndName from '../_Components/AvatarAndName'
import Rating from '../_Components/Rating'
import TimeDetail from '../_Components/TimeDetail'
import AuthorAvatarAndName from '../_Components/AuthorAvatarAndName'
import NumOfPlayers from '../_Components/NumOfPlayers'


export default class Matchs extends Component {
  render() {
   

    return (
        <div className="matchsContainer container">

            <MatchsFilter/>
            <div className="row matchPickContainer">
              <DatePicker/>
              
              <div className="matchs mt-5">
                <div className="row">

                  <div className="col-md-6">
                    <div className="matchContainer">
                      <div className="topContainer">
                        <AvatarAndName
                          rating = {<Rating value="4.5"/>}
                          additional2 = { <TimeDetail/>}
                        />
                      </div>
                      <div className="matchFooter d-flex justify-content-between">
                          <AuthorAvatarAndName/>

                          <NumOfPlayers/>

                          <div className="jointBtnContainer ml-auto">
                            <button className="jointBtn">JOIN</button>
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="matchContainer">
                      <div className="topContainer">
                        <AvatarAndName
                          rating = {<Rating value="4.5"/>}
                          additional2 = { <TimeDetail/>}
                        />
                      </div>
                      <div className="matchFooter d-flex justify-content-between">
                          <AuthorAvatarAndName/>

                          <NumOfPlayers/>

                          <div className="jointBtnContainer ml-auto">
                            <button className="jointBtn">JOIN</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="matchContainer">
                      <div className="topContainer">
                        <AvatarAndName
                          rating = {<Rating value="4.5"/>}
                          additional2 = { <TimeDetail/>}
                        />
                      </div>
                      <div className="matchFooter d-flex justify-content-between">
                          <AuthorAvatarAndName/>

                          <NumOfPlayers/>

                          <div className="jointBtnContainer ml-auto">
                            <button className="jointBtn">JOIN</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="matchContainer">
                      <div className="topContainer">
                        <AvatarAndName
                          rating = {<Rating value="4.5"/>}
                          additional2 = { <TimeDetail/>}
                        />
                      </div>
                      <div className="matchFooter d-flex justify-content-between">
                          <AuthorAvatarAndName/>

                          <NumOfPlayers/>

                          <div className="jointBtnContainer ml-auto">
                            <button className="jointBtn">JOIN</button>
                          </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            <Loading/>
        </div>
    );
  }
}