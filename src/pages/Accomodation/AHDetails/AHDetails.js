import React, { Component } from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBadge, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import './AHDetails.css'

import hotelDetailsOne from '../../../assets/images/hotels/hotel-gallery-one.jpg'
import hotelDetailsTwo from '../../../assets/images/hotels/hotel-gallery-two.jpg'
class AHDetails extends Component {
    state = { 
        modal6: false,
        modal7: false
     }
     toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
      }
    render() {
        return (
            <section className="hotel-details-section section-padding">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="5"></MDBCol>
                        <MDBCol md="7">
                            <div className="hotel-details-item-area">
                                <div className="inn-detail-p1 inn-com">
                                    <h2>Golden Gate, United States</h2>
                                    <div className="r2-ratt">
                                        <i className="fa fa-star"></i> 
                                        <i className="fa fa-star"></i> 
                                        <i className="fa fa-star"></i> 
                                        <i className="fa fa-star"></i> 
                                        <i className="fa fa-star"></i>  
                                        <span>Excellent  4.5 / 5</span> 
                                    </div>
                                    <p>Discover two of South America’s greatest cities, Rio de Janeiro and Buenos Aires, at a leisurely pace. A major highlight on this journey is a visit to Iguassu Falls in between your two city stays. It truly is one of the most spectacular sights on Earth. See the impressive falls from both the Brazilian and Argentine sides.</p>
                                    <p>Brazil’s view takes you through clouds of mist and the opportunity to see these 275 falls, spanning nearly two miles! Argentina’s side allows you to walk along the boardwalk network and embark on a jungle train through the forest for unforgettable views. Hear the deafening roar and admire the brilliant rainbows created by the clouds of spray, and take in the majesty of this wonder of the world. From vibrant cities to scenic beauty, this vacation to Rio de Janeiro, Iguassu Falls, and Buenos Aires will leave you with vacation memories you’ll cherish for life.</p>
                                </div>
                                <div className="inn-detail-p1 inn-com inn-com-list-point">
                                    <div className="detail-title">
                                        <h2>Hotel Amenities</h2>
                                        <p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
                                    </div>
                                    <MDBRow>
                                        <MDBCol md="6">
                                            <MDBListGroup>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                    Airport transportation (surcharge)
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                    Number of floors - 9
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                    Coffee shop or café
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                    Dry cleaning/laundry service
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                     Health club
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                    Billiards or pool table
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                    Total number of rooms - 108
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                     Bar/lounge 
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Spa and Pool
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Fitness Centre
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Business Centre 
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                
                                            </MDBListGroup>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBListGroup>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                     Rental Car Service Desk On Site 
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Concierge
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Transport to / from Hotel
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Internet
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Smoking Rooms Available
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Living Room Space
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Separate Bedroom
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Mini Bar (with liquor)  
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                    Air Conditioner
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Beauty Salon 
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                                Room Service
                                                    <MDBBadge color="primary" pill>
                                                       <FontAwesomeIcon icon={faCheck} />
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                                <div className="inn-detail-p1 inn-com inn-com-form">
                                    <div className="detail-title">
                                        <h2>Hotel Booking</h2>
                                        <p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
                                    </div>
                                    <MDBBtn className="custom-btn" onClick={this.toggle(8)}>Book hotel</MDBBtn>
                                    <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
                                        <MDBModalHeader toggle={this.toggle(8)}>MDBModal title</MDBModalHeader>
                                        <MDBModalBody>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                        <MDBBtn color="secondary" onClick={this.toggle(8)}>Close</MDBBtn>
                                        <MDBBtn color="primary">Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>
						        </div>
                                <div className="inn-detail-p1 inn-com">
                                    <div className="detail-title">
                                        <h2>Photo Gallery</h2>
                                        <p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
                                    </div>
                                    <div className="room-photo-all">
                                        <div className="room-photo-thumb">
                                            <img src={hotelDetailsOne} alt="hotel room"/>
                                        </div>
                                        <div className="room-photo-thumb">
                                            <img src={hotelDetailsTwo} alt="hotel room"/>
                                        </div>
                                        <div className="room-photo-thumb">
                                            <img src={hotelDetailsOne} alt="hotel room"/>
                                        </div>
                                        <div className="room-photo-thumb">
                                            <img src={hotelDetailsTwo} alt="hotel room"/>
                                        </div>
                                        <div className="room-photo-thumb">
                                            <img src={hotelDetailsOne} alt="hotel room"/>
                                        </div>
                                        <div className="room-photo-thumb">
                                            <img src={hotelDetailsTwo} alt="hotel room"/>
                                        </div>

                                        
                                    </div>
                                </div>
                                <div className="inn-detail-p1 inn-com">
                                    <div className="detail-title">
                                        <h2>Hotel Rooms</h2>
                                        <p>a procedure intended to establish the quality, performance, or reliability of something, especially before it is taken into widespread use.</p>
                                    </div>
                                    <div className="re-room">
                                        <ul>
                                            <li>
                                                <MDBRow className="re-room-list">
                                                    <MDBCol lg="3" className="re-room-list-1">
                                                        <img src={hotelDetailsOne} alt="" /> 
                                                    </MDBCol>
                                                    <MDBCol lg="6" className="re-room-list-2">
                                                        <h4>Ultra Deluxe</h4>
                                                        <p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> 
                                                    </MDBCol>
                                                    <MDBCol lg="3" className="re-room-list-3"> 
                                                        <span className="hot-list-p3-1">Price Per Night</span> 
                                                        <span className="hot-list-p3-2">$940</span> 
                                                        <a href="booking.html" className="btn custom-btn">
                                                            Book Now
                                                        </a> 
                                                    </MDBCol>
                                                </MDBRow>
                                            </li>
                                            <li>
                                                <MDBRow className="re-room-list">
                                                    <MDBCol lg="3" className="re-room-list-1">
                                                        <img src={hotelDetailsOne} alt="" /> 
                                                    </MDBCol>
                                                    <MDBCol lg="6" className="re-room-list-2">
                                                        <h4>Ultra Deluxe</h4>
                                                        <p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> 
                                                    </MDBCol>
                                                    <MDBCol lg="3" className="re-room-list-3"> 
                                                        <span className="hot-list-p3-1">Price Per Night</span> 
                                                        <span className="hot-list-p3-2">$940</span> 
                                                        <a href="booking.html" className="btn custom-btn">
                                                            Book Now
                                                        </a> 
                                                    </MDBCol>
                                                </MDBRow>
                                            </li>
                                            <li>
                                                <MDBRow className="re-room-list">
                                                    <MDBCol lg="3" className="re-room-list-1">
                                                        <img src={hotelDetailsOne} alt="" /> 
                                                    </MDBCol>
                                                    <MDBCol lg="6" className="re-room-list-2">
                                                        <h4>Ultra Deluxe</h4>
                                                        <p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> 
                                                    </MDBCol>
                                                    <MDBCol lg="3" className="re-room-list-3"> 
                                                        <span className="hot-list-p3-1">Price Per Night</span> 
                                                        <span className="hot-list-p3-2">$940</span> 
                                                        <a href="booking.html" className="btn custom-btn">
                                                            Book Now
                                                        </a> 
                                                    </MDBCol>
                                                </MDBRow>
                                            </li>
                                            <li>
                                                <MDBRow className="re-room-list">
                                                    <MDBCol lg="3" className="re-room-list-1">
                                                        <img src={hotelDetailsOne} alt="" /> 
                                                    </MDBCol>
                                                    <MDBCol lg="6" className="re-room-list-2">
                                                        <h4>Ultra Deluxe</h4>
                                                        <p><b>Amenities: </b>Television, Wi-Fi, Hair dryer, Towels, Dining, Music, GYM and more.. </p> <span><b>Includes</b> : Free Parking, Breakfast, VAT</span> <span><b>Maxinum </b> : 4 Persons</span> 
                                                    </MDBCol>
                                                    <MDBCol lg="3" className="re-room-list-3"> 
                                                        <span className="hot-list-p3-1">Price Per Night</span> 
                                                        <span className="hot-list-p3-2">$940</span> 
                                                        <a href="booking.html" className="btn custom-btn">
                                                            Book Now
                                                        </a> 
                                                    </MDBCol>
                                                </MDBRow>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="inn-detail-p1 inn-com">
                                    <div className="detail-title">
                                        <h2>Address</h2>
                                        <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A. Landmark : Next To Airport</p>
                                        <h5>PHONE: +01 1245 2541</h5>
                                    </div>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        );
    }
}

export default AHDetails;