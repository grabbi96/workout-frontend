import React, { Component } from 'react'
import envato from "../../../assets/images/profile/envato.png"
class About extends Component {
    state = {  }
    render() {
        return (
          <div id="page-contents" className="page-contents" style={{ position: 'relative' }}>
				<div className="row">
					<div className="col-md-3" />
          <div className="col-md-7">
                <div className="about-profile">
                <div className="about-content-block">
                  <h4 className="grey-text"><i className="fas fa-info-circle"></i>Personal Information</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
                </div>
                <div className="about-content-block">
                  <h4 className="grey-text"><i className="fas fa-info-circle"></i>Work Experiences</h4>
                  <div className="organization">
                    <img src={envato} alt="" className="pull-left img-org" />
                    <div className="work-info">
                      <h5> <a href="/">Envato</a> </h5>
                      <p>Seller - <span className="text-grey">1 February 2013 to present</span></p>
                    </div>
                  </div>
                  <div className="organization">
                    <img src={envato} alt="" className="pull-left img-org" />
                    <div className="work-info">
                      <h5> <a href="/">Envato</a> </h5>
                      <p>Seller - <span className="text-grey">1 February 2013 to present</span></p>
                    </div>
                  </div>
                  <div className="organization">
                    <img src={envato} alt="" className="pull-left img-org" />
                    <div className="work-info">
                      <h5> <a href="/">Envato</a> </h5>
                      <p>Seller - <span className="text-grey">1 February 2013 to present</span></p>
                    </div>
                  </div>
                </div>
                <div className="about-content-block">
                  <h4 className="grey-text"><i className="fas fa-info-circle"></i>Location</h4>
                  <p>228 Park Eve, New York</p>
                </div>
                <div className="about-content-block">
                  <h4 className="grey-text"><i className="fas fa-info-circle"></i>Language</h4>
                    <ul>
                      <li><a href="/">Russian</a></li>
                      <li><a href="/">English</a></li>
                    </ul>
                </div>
              </div>
            </div>
        
					<div className="col-md-2 static">
						<div id="sticky-sidebar" className="">
							<h6 className="gray-text">Sarah's activity</h6>
							<div className="feed-item">
								<div className="live-activity">
									<p>
										<a href="/" className="profile-link">
											Sarah
										</a>{' '}
										Commended on a Photo
									</p>
									<p className="text-muted">5 mins ago</p>
								</div>
							</div>
							<div className="feed-item">
								<div className="live-activity">
									<p>
										<a href="/" className="profile-link">
											Sarah
										</a>{' '}
										Has posted a photo
									</p>
									<p className="text-muted">an hour ago</p>
								</div>
							</div>
							<div className="feed-item">
								<div className="live-activity">
									<p>
										<a href="/" className="profile-link">
											Sarah
										</a>{' '}
										Liked her friend's post
									</p>
									<p className="text-muted">4 hours ago</p>
								</div>
							</div>
							<div className="feed-item">
								<div className="live-activity">
									<p>
										<a href="/" className="profile-link">
											Sarah
										</a>{' '}
										has shared an album
									</p>
									<p className="text-muted">a day ago</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
           
        );
    }
}

export default About;