import React, { Component } from 'react'
import Swiper from "react-id-swiper";
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import HIOne from '../../assets/images/hotels/hotel-one.jpg'
import HITwo from '../../assets/images/hotels/hotel-two.jpg'
import HIThree from '../../assets/images/hotels/hotel-three.jpg'
import './Accomodation.css'
class Accomodation extends Component {
    state = {  }
    render() {
        const params = {
            slidesPerView: 1,
            loop: true,
            autoplay:true
          };
        return (
            <div className="accomdation-area">
                <section className="accomdation-section section-padding">
                    <MDBContainer>
                        <div className="restuarent-title">
                            <h4>Hotels</h4>
                        </div>
                        <div className="event-search-area">
                            <div className="group-control  icon-parent">
                                <input
                                    className="form-control round"
                                    placeholder="Search hotels"
                                />
                                <FontAwesomeIcon icon={faSearch} className="icon-children" />
                            </div>
                        </div>
                        <div className="hotel-wrapper">
                            <MDBRow>
                                <MDBCol sm="6" md="3">
                                    <Link to="/accomodation/details">
                                    <div className="hotel-item-area">
                                        <Swiper {...params}>
                                            <div>
                                                <img src={HIOne} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HITwo} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HIThree} alt="hotel"/>
                                            </div>
                                        </Swiper>
                                        <div className="all-hotel-lc-con">
                                            <h5>United Kingdom</h5>
                                            <p>Farmington Hills, Londan</p>
                                        </div>
                                    </div>
                                    </Link>
                                </MDBCol>
                                <MDBCol sm="6" md="3">
                                <Link to="/accomodation/details">
                                    <div className="hotel-item-area">
                                        <Swiper {...params}>
                                            <div>
                                                <img src={HIOne} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HITwo} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HIThree} alt="hotel"/>
                                            </div>
                                        </Swiper>
                                        <div className="all-hotel-lc-con">
                                            <h5>India</h5>
                                            <p>Farmington Hills, Channai</p>
                                        </div>
                                    </div>
                                    </Link>
                                </MDBCol>
                                <MDBCol sm="6" md="3">
                                <Link to="/accomodation/details">
                                    <div className="hotel-item-area">
                                        <Swiper {...params}>
                                            <div>
                                                <img src={HIOne} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HITwo} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HIThree} alt="hotel"/>
                                            </div>
                                        </Swiper>
                                        <div className="all-hotel-lc-con">
                                            <h5>Germany</h5>
                                            <p>Farmington Hills, Germany</p>
                                        </div>
                                    </div>
                                    </Link>
                                </MDBCol>
                                <MDBCol sm="6" md="3">
                                <Link to="/accomodation/details">
                                    <div className="hotel-item-area">
                                        <Swiper {...params}>
                                            <div>
                                                <img src={HIOne} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HITwo} alt="hotel"/>
                                            </div>
                                            <div>
                                                <img src={HIThree} alt="hotel"/>
                                            </div>
                                        </Swiper>
                                        <div className="all-hotel-lc-con">
                                            <h5>Australia</h5>
                                            <p>Farmington Hills, Melborn</p>
                                        </div>
                                    </div>
                                    </Link>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBContainer>
                </section>
            </div>
        );
    }
}

export default Accomodation;