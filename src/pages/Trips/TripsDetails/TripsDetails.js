import React, { Component } from 'react';

import {MDBContainer, MDBCol, MDBRow} from 'mdbreact'

import "./TripsDetails.css"
import TourOne from '../../../assets/images/tours/tour-one.jpg'
import TourTwo from '../../../assets/images/tours/tour-two.jpg'
import reviewUser from "../../../assets/images/tours/review-user.jpg"
class TripsDetails extends Component {
    state = {  }
    render() {
        return (
            <section>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="2"></MDBCol>
                        <MDBCol md="8">
                        <div className="tour-schedule">
                                    <h6 className=" bold mt-4 mb-3">Amsterdam, the Perfect Schedule: 1st Week</h6>

                                    <p>Spend your first day in Amsterdam getting to know the lay of the land and looking at the city’s rich history.</p> 

                                    <div className="list-font semibold mt-3">Cruise the canals</div>     

                                    <p>A canal cruise is a great way to get acquainted with the city. During your trip, you can also jot down a few places 
                                    that you might want to visit later. A few of the most notable canal cruise operators include Lovers, Canal and Holland International.</p> 

                                    <div className="list-font semibold mt-3">Rent a Bike</div>  

                                    <p>It’s time to start exploring on your own. Go to a reputable bike rental shop like MacBike or Yellow Bike and hire Amsterdam’s preferred form of transportation for 24 hours or more.</p>

                                    <img className="img-fluid my-3" src={TourOne} alt="tour" />

                                    <h6 className=" bold mt-5 mb-3">Amsterdam, the Perfect Schedule: 2nd Week</h6>

                                    <p>After your canal cruise, walk to the Amsterdam Museum and delve into 800 years of local history. Once you’re done, walk around the corner to the Spuiplein and enter the Begijnhof 
                                        through a barely noticeable door. Take a peaceful stroll around this courtyard -- once home to the faithful Beguine order.</p>    

                                    <div className="list-font semibold mt-3">Cruise the canals</div>     

                                    <p>A canal cruise is a great way to get acquainted with the city. During your trip, you can also jot down a few places 
                                    that you might want to visit later. A few of the most notable canal cruise operators include Lovers, Canal and Holland International.</p> 

                                    <img className="img-fluid my-3" src={TourTwo} alt="tour" />

                                    <div className="list-font semibold mt-3">Drink with a Touch of Glass</div>  

                                    <p>Finish your day at one of Amsterdam’s best cocktail bars – both the ingredients are the creative presentations are sure to impress. </p>


                                    <div className="list-font semibold mt-3">A night on Town</div>  
                                
                                    <p>If you’ve still got energy to spare, treat yourself to a night out at one of Amsterdam's many bars and clubs. If you’d prefer a concert,
                                        play or dance performance, visit the Last Minute Ticket Shop (open daily 10:00 – 17:00) and spontaneously pick a show at up to 50% off.</p>

                                </div>
                            <div className="comments-container">
                                <h6 className="bold mt-5">Tour Reviews </h6>

                                <ul id="comments-list" className="comments-list">
                                    <li>
                                        <div className="comment-main-level mb-4">
                                     
                                            <div className="comment-avatar">
                                                <img src={reviewUser} alt="reviewUser" />
                                            </div>
                                            <div className="comment-box">
                                                <div className="comment-head">
                                                    <h6 className="comment-name "><a href="/">Chad Guideaur</a></h6>
                                                    <div className="text-left"> 
                                                        <i className="fas fa-star"></i> 
                                                        <i className="fas fa-star"></i> 
                                                        <i className="fas fa-star"></i>  
                                                        <i className="fas fa-star"></i> 
                                                        <span className="time-review text-left">3 hours ago</span>
                                                    </div>
                                                    
                                                </div>
                                                <div className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipising elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                        
                                    <li>
                                        <div className="comment-main-level">
                                            <div className="comment-avatar d-md-block"><img src={reviewUser} alt="reviewUser" /></div>
                                            <div className="comment-box">
                                                <div className="comment-head">
                                                    <h6 className="comment-name"><a href="/">Chad Guideaur</a></h6>
                                                    <div className="text-left"> 
                                                        <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>  <i className="fas fa-star"></i> 
                                                        
                                                        <span className="time-review text-left">3 hours ago</span>
                                                    </div>

                                                </div>

                                                <div className="comment-content">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            
                            </div>    
                        
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}

export default TripsDetails;