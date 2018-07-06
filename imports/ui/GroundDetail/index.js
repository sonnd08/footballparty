import React, {Component} from 'react';
import Rating from '../_Components/Rating';
import AvatarAndName from '../_Components/AvatarAndName'
import MultiBtn from '../_Components/MultiBtn'
import Comment from '../_Components/Comment'
import HistoryItem from './HistoryItem'
import BookingModal from './BookingModal'


export default class Body extends Component {
    render() {
        return (
            <div className="groundDetail container">
                <BookingModal/>
                <div className="titleContainer">
                    <a href="#">
                        <i className="icon-arrow-left mr-4"></i>
                    </a>
                    <h1 className="title">Ground Info</h1>
                </div>
            
                <div className="row contentContainer">
                    <div className="col-lg-8">
                        <div>
                            <img className="mainPic" src="/assets/imgs/ground.png" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-4 contentDetail">
                        <h2 className="groundName">Old Trafford Stadium</h2>
                        <p className="address">Sir Matt Busby Way, Stretford Manchester M16 0RA, UK</p>
                        <Rating value="4.5"/>
                        <hr/>
                        <AvatarAndName name="Phuong Nguyen" additional="Owner"/>
                        <p className="description mt-3">Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua.
                        </p>
                        <p className="price">$25.00</p>
                        <p className="per">/hr</p>
                        
                        <MultiBtn/>

                        <span className="timeLeft">4</span>
                        <span className="timeUnit">&nbsp;hour</span>

                        <span className="status">&nbsp; Available today</span>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-8 commentsContainer">
                        <span className="title">Comments &amp; Reviews &nbsp;</span>
                        <span className="sumOfCmts">(4)</span>

                        <div className="userCmts mt-5">
                            <Comment 
                                name="Phuong Nguyen" 
                                additional="Owner" 
                                ratingObj={<Rating value="4.5"/>}
                                cmt={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                            />

                            <Comment 
                                name="Ronaldo" 
                                additional="Owner" 
                                ratingObj={<Rating value="1.5"/>}
                                cmt={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                            />

                            <Comment 
                                name="Phuong Nguyen" 
                                additional="Owner" 
                                ratingObj={<Rating value="3"/>}
                                cmt={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                            />

                            <Comment 
                                name="Phuong Nguyen" 
                                additional="Owner" 
                                ratingObj={<Rating value="5"/>}
                                cmt={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."}
                            />
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
