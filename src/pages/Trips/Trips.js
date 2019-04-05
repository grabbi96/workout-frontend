import React, { Component } from 'react'
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import {Link} from 'react-router-dom'
import tripImage from '../../assets/images/hotels/hotel-gallery-one.jpg'
import './Trips.css'
class Trips extends Component {
    state = {  }
    render() {
        return (
            <section className="section-padding trip-section">
                <MDBContainer>
                    <div className="section-header text-center">
                        <h2>Hot Trips History from Travel Section</h2>
                    </div>
                    <div className="section-wapper">
                        <MDBRow>
                            <MDBCol lg="6">
                                <Link to="/trips/details">
                                    <div className="trip-item z-depth-1">
                                        <div className="trip-thumb">
                                            <img src={tripImage} alt="trips"/>
                                            <div className="trip-thumb-overlay">
                                            <span>23</span> 
                                            <span>dec</span>  
                                            </div>
                                        </div>
                                        <div className="trip-content">
                                            <h4>4 Magnificent Parks of England’s Ancient East</h4>
                                            <p>Minim minim nostrud non minim ut mollit cillficia occaecat fugiat duis. Consequat est non excepteur proident..</p>
                                            <ul>
                                                <li><i className="far fa-heart"></i>  likes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </MDBCol>

                            <MDBCol lg="6">
                                <Link to="/trips/details">
                                    <div className="trip-item z-depth-1">
                                        <div className="trip-thumb">
                                            <img src={tripImage} alt="trips"/>
                                            <div className="trip-thumb-overlay">
                                            <span>23</span> 
                                            <span>dec</span>  
                                            </div>
                                        </div>
                                        <div className="trip-content">
                                            <h4>4 Magnificent Parks of England’s Ancient East</h4>
                                            <p>Minim minim nostrud non minim ut mollit cillficia occaecat fugiat duis. Consequat est non excepteur proident..</p>
                                            <ul>
                                                <li><i className="far fa-heart"></i>  likes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </MDBCol>

                            <MDBCol lg="6">
                                <Link to="/trips/details">
                                    <div className="trip-item z-depth-1">
                                        <div className="trip-thumb">
                                            <img src={tripImage} alt="trips"/>
                                            <div className="trip-thumb-overlay">
                                            <span>23</span> 
                                            <span>dec</span>  
                                            </div>
                                        </div>
                                        <div className="trip-content">
                                            <h4>4 Magnificent Parks of England’s Ancient East</h4>
                                            <p>Minim minim nostrud non minim ut mollit cillficia occaecat fugiat duis. Consequat est non excepteur proident..</p>
                                            <ul>
                                                <li><i className="far fa-heart"></i>  likes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </MDBCol>

                            <MDBCol lg="6">
                                <Link to="/trips/details">
                                    <div className="trip-item z-depth-1">
                                        <div className="trip-thumb">
                                            <img src={tripImage} alt="trips"/>
                                            <div className="trip-thumb-overlay">
                                            <span>23</span> 
                                            <span>dec</span>  
                                            </div>
                                        </div>
                                        <div className="trip-content">
                                            <h4>4 Magnificent Parks of England’s Ancient East</h4>
                                            <p>Minim minim nostrud non minim ut mollit cillficia occaecat fugiat duis. Consequat est non excepteur proident..</p>
                                            <ul>
                                                <li><i className="far fa-heart"></i>  likes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBContainer>
            </section>
        );
    }
}

export default Trips;