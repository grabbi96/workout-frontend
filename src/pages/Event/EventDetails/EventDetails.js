import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Tabs, Tab } from "react-bootstrap";
// import GoogleMap from "../../../components/GoogleMap/GoogleMap"
import Swiper from "react-id-swiper";
import GoogleMap from "../../../components/GoogleMap/GoogleMap";
import eventSilderOne from "../../../assets/images/event/event-one.jpg";
import "./EventDetails.css";

class EventDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallerySwiper: null,
      thumbnailSwiper: null
    };

    this.galleryRef = this.galleryRef.bind(this);
    this.thumbRef = this.thumbRef.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
      const { gallerySwiper, thumbnailSwiper } = nextState;

      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }

  galleryRef(ref) {
    if (ref) this.setState({ gallerySwiper: ref.swiper });
  }

  thumbRef(ref) {
    if (ref) this.setState({ thumbnailSwiper: ref.swiper });
  }
  render() {
    const gallerySwiperParams = {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    };

    //   const thumbnailSwiperParams = {
    //     paceBetween: 10,
    //     centeredSlides: true,
    //     slidesPerView: 'auto',
    //     touchRatio: 0.2,
    //     slideToClickedSlide: true
    //   };
    return (
      <div>
        <section className="event-details-banner-section">
          <div className="edb-details-content">
            <MDBContainer>
              <h2>
                Brazil & Argentina - <span> Family Package </span>
              </h2>
              <p>
                Book travel packages and enjoy your holidays with distinctive
                experience
              </p>
            </MDBContainer>
          </div>
        </section>
        <section>
          <div className="rows banner_book" id="inner-page-title">
            <div className="container">
              <div className="banner_book_1">
                <ul>
                  <li className="dl1">Location : Rio,Brazil</li>
                  <li className="dl2">Price : $500</li>
                  <li className="dl3">Duration : 8 Nights/ 9 Days</li>
                  <li className="dl4">
                    <a href="booking.html">Book Now</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="event-details-description-section section-padding">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="9">
                <div className="tour_head">
                  <h2>
                    The Best of Brazil &amp; Argentina
                    <span className="tour_star">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-half-o" aria-hidden="true" />
                    </span>
                    <span className="tour_rat">4.5</span>
                  </h2>
                </div>
                <div className="tour_head1">
                  <h3>Gallery</h3>
                  <Swiper {...gallerySwiperParams} ref={this.galleryRef}>
                    <div>
                      <img src={eventSilderOne} alt="event" />
                    </div>
                    <div>
                      <img src={eventSilderOne} alt="event" />
                    </div>
                    <div>
                      <img src={eventSilderOne} alt="event" />
                    </div>
                    <div>
                      <img src={eventSilderOne} alt="event" />
                    </div>
                  </Swiper>
                </div>
                <div className="tour_head1">
                  <h3>About The Tour</h3>
                  <table>
                    <tbody>
                      <tr>
                        <th>Places covered</th>
                        <th className="event-res">Inclusions</th>
                        <th className="event-res">Exclusions</th>
                        <th>Event Date</th>
                      </tr>
                      <tr>
                        <th>Trip Start</th>
                        <td className="event-res">12-12-2018</td>
                        <th className="event-res">Trip End</th>
                        <td>12-12-2018</td>
                      </tr>
                      <tr>
                        <th>Registration Deadline </th>
                        <td>12-12-2018</td>
                        <th className="event-res">Cancelation Deadline</th>
                        <td>12-12-2018</td>
                      </tr>
                      <tr>
                        <th>Available Seat </th>
                        <td className="event-res">First-className Travel</td>
                        <th className="event-res">Total Cost</th>
                        <td>Nov 16, 2017</td>
                      </tr>
                      <tr>
                        <th>Total Register </th>
                        <td className="event-res">Free Sightseeing</td>
                        <th className="event-res">Organizer</th>
                        <td>Nov 18, 2017</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tour_head1">
                  <h3>Location</h3>
                  <div style={{ height: "300px", position: "relative" }}>
                    <GoogleMap />
                  </div>
                </div>
                <div className="tour_head1 l-info-pack-days days">
                  <h3>Detailed Day Wise Itinerary</h3>
                  <ul>
                    <li className="l-info-pack-plac">
                      {" "}
                      <i className="far fa-clock" />
                      <h4>
                        <span>Day : 1</span> Arrival and Evening Dhow Cruise
                      </h4>
                      <p>
                        Arrive at the airport and transfer to hotel. Check-in
                        time at the hotel will be at 2:00 PM. In the evening,
                        enjoy a tasty dinner on the Dhow cruise. Later, head
                        back to the hotel for a comfortable overnight stay.
                      </p>
                    </li>
                    <li className="l-info-pack-plac">
                      {" "}
                      <i className="far fa-clock" />
                      <h4>
                        <span>Day : 2</span> City Tour and Evening Free for
                        Leisure
                      </h4>
                      <p>
                        After breakfast, proceed for tour of Dubai city. Visit
                        Jumeirah Mosque, World Trade Centre, Palaces and Dubai
                        Museum. Enjoy your overnight stay at the hotel.In the
                        evening, enjoy a tasty dinner on the Dhow cruise. Later,
                        head back to the hotel for a comfortable overnight stay.
                      </p>
                    </li>
                    <li className="l-info-pack-plac">
                      {" "}
                      <i className="far fa-clock" />
                      <h4>
                        <span>Day : 3</span> Desert Safari with Dinner
                      </h4>
                      <p>
                        Relish a yummy breakfast and later, proceed to explore
                        the city on your own. Enjoy shopping at Mercato Shopping
                        Mall, Dubai Mall and Wafi City. In the evening, enjoy
                        the desert safari experience and belly dance
                        performance. Relish a mouth-watering barbecue dinner and
                        enjoy staying overnight in Dubai.
                      </p>
                    </li>
                    <li className="l-info-pack-plac">
                      {" "}
                      <i className="far fa-clock" />
                      <h4>
                        <span>Day : 4</span> Day at leisure
                      </h4>
                      <p>
                        Savour a satiating breakfast and relax for a while. Day
                        Free for leisure. Overnight stay will be arranged in
                        Dubai. In the evening, enjoy a tasty dinner on the Dhow
                        cruise. Later, head back to the hotel for a comfortable
                        overnight stay.
                      </p>
                    </li>
                    <li className="l-info-pack-plac">
                      {" "}
                      <i className="far fa-clock" />
                      <h4>
                        <span>Day : 5</span> Departure
                      </h4>
                      <p>
                        Fill your tummy with yummy breakfast and relax for a
                        while. Later, check out from the hotel and proceed for
                        your onward journey.In the evening, enjoy a tasty dinner
                        on the Dhow cruise. Later, head back to the hotel for a
                        comfortable overnight stay.
                      </p>
                    </li>
                  </ul>
                </div>
                <Tabs
                  defaultActiveKey="description"
                  id="uncontrolled-tab-example"
                >
                  <Tab eventKey="description" title="Description">
                    <div className="tour_head1">
                      <h3>Description</h3>
                      <p>
                        Discover two of South America’s greatest cities, Rio de
                        Janeiro and Buenos Aires, at a leisurely pace. A major
                        highlight on this journey is a visit to Iguassu Falls in
                        between your two city stays. It truly is one of the most
                        spectacular sights on Earth. See the impressive falls
                        from both the Brazilian and Argentine sides.
                      </p>
                      <p>
                        Brazil’s view takes you through clouds of mist and the
                        opportunity to see these 275 falls, spanning nearly two
                        miles! Argentina’s side allows you to walk along the
                        boardwalk network and embark on a jungle train through
                        the forest for unforgettable views. Hear the deafening
                        roar and admire the brilliant rainbows created by the
                        clouds of spray, and take in the majesty of this wonder
                        of the world. From vibrant cities to scenic beauty, this
                        vacation to Rio de Janeiro, Iguassu Falls, and Buenos
                        Aires will leave you with vacation memories you’ll
                        cherish for life.
                      </p>
                    </div>
                  </Tab>
                  <Tab eventKey="accommodation" title="Accommodation">
                    <div className="tour_head1 l-info-pack-days days">
                      <h3>Detailed Day Wise Accommodations</h3>
                      <ul>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 1</span> Arrival and Evening Dhow Cruise
                          </h4>
                          <p>
                            Arrive at the airport and transfer to hotel.
                            Check-in time at the hotel will be at 2:00 PM. In
                            the evening, enjoy a tasty dinner on the Dhow
                            cruise. Later, head back to the hotel for a
                            comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 2</span> City Tour and Evening Free for
                            Leisure
                          </h4>
                          <p>
                            After breakfast, proceed for tour of Dubai city.
                            Visit Jumeirah Mosque, World Trade Centre, Palaces
                            and Dubai Museum. Enjoy your overnight stay at the
                            hotel.In the evening, enjoy a tasty dinner on the
                            Dhow cruise. Later, head back to the hotel for a
                            comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 3</span> Desert Safari with Dinner
                          </h4>
                          <p>
                            Relish a yummy breakfast and later, proceed to
                            explore the city on your own. Enjoy shopping at
                            Mercato Shopping Mall, Dubai Mall and Wafi City. In
                            the evening, enjoy the desert safari experience and
                            belly dance performance. Relish a mouth-watering
                            barbecue dinner and enjoy staying overnight in
                            Dubai.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 4</span> Day at leisure
                          </h4>
                          <p>
                            Savour a satiating breakfast and relax for a while.
                            Day Free for leisure. Overnight stay will be
                            arranged in Dubai. In the evening, enjoy a tasty
                            dinner on the Dhow cruise. Later, head back to the
                            hotel for a comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 5</span> Departure
                          </h4>
                          <p>
                            Fill your tummy with yummy breakfast and relax for a
                            while. Later, check out from the hotel and proceed
                            for your onward journey.In the evening, enjoy a
                            tasty dinner on the Dhow cruise. Later, head back to
                            the hotel for a comfortable overnight stay.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="foodplan" title="Food Plan">
                    <div className="tour_head1 l-info-pack-days days">
                      <h3>Detailed Day Wise Food Plan</h3>
                      <ul>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 1</span> Arrival and Evening Dhow Cruise
                          </h4>
                          <p>
                            Arrive at the airport and transfer to hotel.
                            Check-in time at the hotel will be at 2:00 PM. In
                            the evening, enjoy a tasty dinner on the Dhow
                            cruise. Later, head back to the hotel for a
                            comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 2</span> City Tour and Evening Free for
                            Leisure
                          </h4>
                          <p>
                            After breakfast, proceed for tour of Dubai city.
                            Visit Jumeirah Mosque, World Trade Centre, Palaces
                            and Dubai Museum. Enjoy your overnight stay at the
                            hotel.In the evening, enjoy a tasty dinner on the
                            Dhow cruise. Later, head back to the hotel for a
                            comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 3</span> Desert Safari with Dinner
                          </h4>
                          <p>
                            Relish a yummy breakfast and later, proceed to
                            explore the city on your own. Enjoy shopping at
                            Mercato Shopping Mall, Dubai Mall and Wafi City. In
                            the evening, enjoy the desert safari experience and
                            belly dance performance. Relish a mouth-watering
                            barbecue dinner and enjoy staying overnight in
                            Dubai.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 4</span> Day at leisure
                          </h4>
                          <p>
                            Savour a satiating breakfast and relax for a while.
                            Day Free for leisure. Overnight stay will be
                            arranged in Dubai. In the evening, enjoy a tasty
                            dinner on the Dhow cruise. Later, head back to the
                            hotel for a comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 5</span> Departure
                          </h4>
                          <p>
                            Fill your tummy with yummy breakfast and relax for a
                            while. Later, check out from the hotel and proceed
                            for your onward journey.In the evening, enjoy a
                            tasty dinner on the Dhow cruise. Later, head back to
                            the hotel for a comfortable overnight stay.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="transportations" title="Transportations">
                    <div className="tour_head1 l-info-pack-days days">
                      <h3>Detailed Day Wise Transportations</h3>
                      <ul>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 1</span> Arrival and Evening Dhow Cruise
                          </h4>
                          <p>
                            Arrive at the airport and transfer to hotel.
                            Check-in time at the hotel will be at 2:00 PM. In
                            the evening, enjoy a tasty dinner on the Dhow
                            cruise. Later, head back to the hotel for a
                            comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 2</span> City Tour and Evening Free for
                            Leisure
                          </h4>
                          <p>
                            After breakfast, proceed for tour of Dubai city.
                            Visit Jumeirah Mosque, World Trade Centre, Palaces
                            and Dubai Museum. Enjoy your overnight stay at the
                            hotel.In the evening, enjoy a tasty dinner on the
                            Dhow cruise. Later, head back to the hotel for a
                            comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 3</span> Desert Safari with Dinner
                          </h4>
                          <p>
                            Relish a yummy breakfast and later, proceed to
                            explore the city on your own. Enjoy shopping at
                            Mercato Shopping Mall, Dubai Mall and Wafi City. In
                            the evening, enjoy the desert safari experience and
                            belly dance performance. Relish a mouth-watering
                            barbecue dinner and enjoy staying overnight in
                            Dubai.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 4</span> Day at leisure
                          </h4>
                          <p>
                            Savour a satiating breakfast and relax for a while.
                            Day Free for leisure. Overnight stay will be
                            arranged in Dubai. In the evening, enjoy a tasty
                            dinner on the Dhow cruise. Later, head back to the
                            hotel for a comfortable overnight stay.
                          </p>
                        </li>
                        <li className="l-info-pack-plac">
                          {" "}
                          <i className="far fa-clock" />
                          <h4>
                            <span>Day : 5</span> Departure
                          </h4>
                          <p>
                            Fill your tummy with yummy breakfast and relax for a
                            while. Later, check out from the hotel and proceed
                            for your onward journey.In the evening, enjoy a
                            tasty dinner on the Dhow cruise. Later, head back to
                            the hotel for a comfortable overnight stay.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </Tab>
                  <Tab eventKey="teammates" title="Teammates">
                    <div className="tour_head1 l-info-pack-days days">
                      <h3>Detailed Day Wise teammates</h3>
                    </div>
                  </Tab>
                </Tabs>
                ;
              </MDBCol>
              <MDBCol md="3" className="tour_r">
                <div className="tour_right tour_incl tour-ri-com">
                  <h3>Trip Information</h3>
                  <ul>
                    <li>Location : Rio,Brazil</li>
                    <li>Arrival Date: Nov 12, 2017</li>
                    <li>Departure Date: Nov 21, 2017</li>
                    <li>Free Sightseeing &amp; Hotel</li>
                  </ul>
                </div>
                <div className="tour_right head_right tour_social tour-ri-com">
                  <h3>Share This Package</h3>
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fab fa-facebook-f" />
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-google-plus" />
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-twitter" />
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-linkedin" />
                      </a>{" "}
                    </li>
                    <li>
                      <a href="/">
                        <i className="fab fa-whatsapp" />
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="tour_right head_right tour_help tour-ri-com">
                  <h3>Help &amp; Support</h3>
                  <div className="tour_help_1">
                    <h4 className="tour_help_1_call">Call Us Now</h4>
                    <h4>
                      <i className="fa fa-phone" aria-hidden="true" />{" "}
                      10-800-123-000
                    </h4>{" "}
                  </div>
                </div>
                <div className="tour_right tour_rela tour-ri-com">
                  <h3>Popular Packages</h3>
                  <div className="tour_rela_1">
                    {" "}
                    <img src={eventSilderOne} alt="tour" />
                    <h4>Dubai 7Days / 6Nights</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </p>{" "}
                    <a href="/" className="btn custom-btn">
                      View this Package
                    </a>{" "}
                  </div>
                  <div className="tour_rela_1">
                    {" "}
                    <img src={eventSilderOne} alt="tour" />
                    <h4>Mauritius 4Days / 3Nights</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </p>{" "}
                    <a href="/" className="btn custom-btn">
                      View this Package
                    </a>{" "}
                  </div>
                  <div className="tour_rela_1">
                    {" "}
                    <img src={eventSilderOne} alt="tour" />
                    <h4>India 14Days / 13Nights</h4>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text
                    </p>{" "}
                    <a href="/" className="btn custom-btn">
                      View this Package
                    </a>{" "}
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    );
  }
}

export default EventDetails;
