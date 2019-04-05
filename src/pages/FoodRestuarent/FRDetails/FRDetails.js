import React, { Component } from "react";
import Swiper from "react-id-swiper";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput
} from "mdbreact";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faDribbble,
//   faGooglePlus,
//   faPinterest,
//   faFlickr,
//   faSkype
// } from "@fortawesome/free-brands-svg-icons";
import "./FRDetails.css";
// import "react-tabs/style/react-tabs.css";
import rItemOne from "../../../assets/images/restuarant/r-item-one.jpg";
import rItemTwo from "../../../assets/images/restuarant/r-item-two.jpg";
class FRDetails extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const params = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    };
    return (
      <div className="restaurent-details">
        <section className="r-banner-section">
          <Swiper {...params}>
            <div>
              <div className="slider-item">
                <h2>Welcome to </h2>
                <h1>Dawat cafe &amp; restuarent</h1>
              </div>
            </div>
            <div>
              <div className="slider-item">
                <h2>Our Menu</h2>
                <h1>see what's new today</h1>
              </div>
            </div>
            <div>
              <div className="slider-item">
                <h2>Get ready</h2>
                <h1>to join with</h1>
              </div>
            </div>
          </Swiper>
        </section>
        <section className="r-about-section section-padding">
          <div className="container">
            <div className="section-heaseer">
              <h2 className="r-title">Our Story</h2>
            </div>
            <div className="section-wrapper">
              <div className="row">
                <div className="col-md-6">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consectetur quaerat dicta ratione mollitia inventore,
                    repellendus iure, eum similique eligendi nisi itaque eos nam
                    blanditiis sunt. Consequatur delectus ab dolorem veniam?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aperiam vitae natus sed, officiis, recusandae doloremque
                    fugit, inventore tempora eaque sequi molestiae laboriosam
                    quo accusamus deserunt nisi ipsum assumenda minus. Sit!
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis modi ex voluptatum nemo quibusdam dolorem
                    temporibus, fugit minus, quisquam, laudantium harum quas
                    soluta praesentium dolore? Numquam possimus molestiae ullam
                    soluta! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Molestiae placeat quas fugiat quos, labore adipisci
                    commodi dolor obcaecati, delectus porro ipsam, perspiciatis
                    mollitia doloribus hic eum. Animi aliquid repellendus nulla!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <MDBContainer>
            <Tabs>
              <TabList>
                <Tab>
                  <MDBBtn outline >All</MDBBtn>
                </Tab>
                <Tab>
                  <MDBBtn outline >breakfast</MDBBtn>
                </Tab>
                <Tab>
                  <MDBBtn outline >launch</MDBBtn>
                </Tab>

                <Tab>
                  <MDBBtn outline >Dinner</MDBBtn>
                </Tab>
                <Tab>
                  <MDBBtn outline >coffee</MDBBtn>
                </Tab>
                <Tab>
                  <MDBBtn outline >snacks</MDBBtn>
                </Tab>
              </TabList>

              <TabPanel>
                <div className="food-title">
                  <h2> All </h2>
                </div>
                <MDBRow>

                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                </MDBRow>
              </TabPanel>
              <TabPanel>
                <div className="food-title">
                  <h2> breakfast </h2>
                </div>
                <MDBRow>

                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                </MDBRow>
              </TabPanel>
              <TabPanel>
                <div className="food-title">
                  <h2> launch </h2>
                </div>
                <MDBRow>

                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                </MDBRow>
              </TabPanel>
              <TabPanel>
                <div className="food-title">
                  <h2> Dinner </h2>
                </div>
                <MDBRow>

                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                </MDBRow>
              </TabPanel>
              <TabPanel>
                <div className="food-title">
                  <h2> Coffee </h2>
                </div>
                <MDBRow>

                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                </MDBRow>
              </TabPanel>
              <TabPanel>
                <div className="food-title">
                  <h2> sacks </h2>
                </div>
                <MDBRow>

                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                  <MDBCol md="6">
                    <div className="single-menu-details">
                      <div className="food-menu-img"><img src={rItemOne} alt="food" /></div>
                      <div className="food-menu-details">
                        <h3>Cupcake Recipes <span className="menu-price">$20.00</span></h3>
                        <p className="menu-speacification"><span>- Juice Fruit</span> <span>- Checken</span> <span>- Cherry</span></p>
                        <p className="menu-speacification"><span>- Vegetable</span> <span>- Milk</span> <span>- Potato</span></p>
                        <p className="menu-speacification"><span>- Tomato</span> <span>- Chilli</span> <span>- Sesame</span></p>
                      </div>
                    </div>

                  </MDBCol>
                </MDBRow>
              </TabPanel>
            </Tabs>
          </MDBContainer>

        </section>
        <section className="section-padding r-book-section">
          <div className="container">
            <div className="r-book-content">
              <h2>BOOK A TABLE NOW !</h2>
              <MDBBtn className="custom-btn" onClick={this.toggle}>
                Book Hotel
              </MDBBtn>
              <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>
                  MDBModal title
                </MDBModalHeader>
                <MDBModalBody>

                  <form style={{ width: "100%" }}>

                    <div className="grey-text">
                      <MDBRow>
                        <MDBCol md="6">
                          <MDBInput
                            label="Type your name"
                            icon="user"
                            group
                            type="text"
                            
                            error="wrong"
                            success="right"
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            label="Type your email"
                            icon="at"
                            
                            type="email"
                            
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            label="Type your number"
                            icon="phone"
                            group
                            type="text"
                            
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            icon="calendar-alt"
                            group
                            type="date"
                            
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            icon="clock"
                            group
                            label="Time..."
                            type="text"
                            
                          />
                        </MDBCol>
                        <MDBCol md="6">
                          <MDBInput
                            icon="user-alt"
                            group
                            label="person"
                            type="text"
                            
                          />
                        </MDBCol>
                      </MDBRow>
                    </div>
                  </form>

                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn outline className="custom-btn-border">Book Hotel</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
            </div>
          </div>
        </section>
        <section className="r-gallery-section section-padding">
          <div className="container">
            <div className="section-heaseer">
              <h2 className="r-title">Gallery</h2>
            </div>
            <div className="section-wrapper">
              <div className="r-gallery-item">
                <img src={rItemOne} alt="r-item" className="z-depth-1" />
                <img src={rItemTwo} alt="r-item" className="z-depth-1" />
                <img src={rItemOne} alt="r-item" className="z-depth-1" />
                <img src={rItemTwo} alt="r-item" className="z-depth-1" />
                <img src={rItemOne} alt="r-item" className="z-depth-1" />
                <img src={rItemTwo} alt="r-item" className="z-depth-1" />
                <img src={rItemOne} alt="r-item" className="z-depth-1" />
                <img src={rItemTwo} alt="r-item" className="z-depth-1" />
              </div>
            </div>
          </div>
        </section>
        {/* <section className="footer-top-section section-padding">
          <MDBContainer>
            <div class="footer-top section-padding text-center">
              <div class="footer-address">
                <p>
                  20, floor, Queenslad Victoria Building. 60 california street
                  california USA
                </p>
                <p>
                  <a href="mailto:mehedidb@gmail.com">hello@dawat.com</a>
                </p>
                <p>
                  <a href="callto:+8800000001111">+88 000 0000 1111</a>
                </p>
              </div>
              <div class="footer-social-bookmark">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFlickr} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faSkype} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </MDBContainer>
        </section> */}

      </div>
    );
  }
}

export default FRDetails;
