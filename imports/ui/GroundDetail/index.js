import React, {Component} from 'react';
import Rating from '../_Components/Rating';
import AvatarAndName from '../_Components/AvatarAndName'
import MultiBtn from '../_Components/MultiBtn'
import Comment from '../_Components/Comment'
import HistoryItem from './HistoryItem'
import BookingModal from './BookingModal'
import {toggleBookingModal} from '../_Redux/Actions/toggleModal'

import { Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {withTracker} from 'meteor/react-meteor-data'
import {Grounds} from '../../../lib/collections/grounds'
import {Users} from '../../../lib/collections/users'
import {Comments} from '../../../lib/collections/comments'

class GroundDetailBody extends Component {
  toggleBookingModal = ()=>{
    this.props.dispatch(toggleBookingModal());
  }
    render() {
        let {groundDetail, isReady, founderDetail, cmts} = this.props;
        if (!isReady) return <div>Loading...</div>
        // console.log('GroundDetailBody rendering');
        return (
            <div className="groundDetail container">
                <BookingModal/>
                <div className="titleContainer">
                    <a onClick={() => this.props.history.goBack()}>
                        <i className="icon-arrow-left mr-4"></i>
                    </a>
                    <h1 className="title">Ground Info</h1>
                </div>
            
                <div className="row contentContainer">
                    <div className="col-lg-8">
                        <div>
                            <img className="mainPic" src={groundDetail.imgURL} alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-4 contentDetail">
                        <h2 className="groundName">{groundDetail.name}</h2>
                        <p className="address">{groundDetail.address}</p>
                        <Rating value={groundDetail.rating}/>
                        <hr/>
                        <AvatarAndName img={founderDetail.avatar} name={founderDetail.name} additional={founderDetail.title}/>
                        <p className="description mt-3">{groundDetail.description}</p>
                        <p className="price">${groundDetail.price}</p>
                        <p className="per">/hr</p>
                        
                        <div className="multiBtnContainer d-flex justify-conten-center row pb-3">
                          <button className="button firstBtn activeBtn col-5" onClick={this.toggleBookingModal}>BOOK NOW</button>
                          <button className="button col-4">Favorite</button>
                          <button className="button col-3">Share</button>
                        </div>

                        <span className="timeLeft">4</span>
                        <span className="timeUnit">&nbsp;hour</span>

                        <span className="status">&nbsp; Available today</span>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-8 commentsContainer">
                        <span className="title">Comments &amp; Reviews &nbsp;</span>
                        <span className="sumOfCmts">({cmts.length})</span>

                        <div className="userCmts mt-5">
                          {cmts.map((cmt, i)=>{
                            return <Comment 
                              key={i}
                              img={cmt.userAvatar}
                              name={cmt.userName}
                              additional={cmt.userTitle} 
                              ratingObj={<Rating value={cmt.rating}/>}
                              cmt={cmt.comment}
                            />
                          })}
                            
                        </div>

                    </div>

                    <div className="col-lg-4 historiesContainer">
                        <span className="title">Histories &nbsp;</span>
                        <span className="sumOfHistories">(2)</span>
                        
                        <div className="histories  mt-5">
                            <HistoryItem
                                src = "https://dummyimage.com/100x100/000000/ffffff"
                                name = "Champions league"
                                date ="05 Oct 2017"
                                numberOfTeams = "12"
                                numberOfPlayers = "220"
                            />
                            
                            <HistoryItem
                                src = "https://dummyimage.com/100x100/000000/ffffff"
                                name = "Champions league"
                                date ="05 Oct 2017"
                                numberOfTeams = "12"
                                numberOfPlayers = "220"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(connect(store=>{return {}})(
  withTracker((props) => {
    console.log('GroundDetail_withTracker start to subscription');
    let isReady = Meteor.subscribe('grounds').ready() && Meteor.subscribe('users') && Meteor.subscribe('comments')
    let founderDetail;
    let cmts;
    const groundDetail = Grounds.findOne({_id: new Mongo.ObjectID(props.match.params.groundID)});
    if(groundDetail){
      founderDetail = Users.findOne({_id: groundDetail.founderId});
      cmts = Comments.find({groundId: groundDetail._id}).fetch();
    }
    // console.log(cmts);
    
    isReady = isReady && groundDetail && founderDetail && cmts
    
    console.log('finished subscription');
    return {
      groundDetail,
      founderDetail,
      cmts,
      isReady
    };    
  })(GroundDetailBody)));