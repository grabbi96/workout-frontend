import React, { Component } from 'react';
import './profile2.css';
import {Route, NavLink} from 'react-router-dom'
import profileLogo from '../../assets/images/profile/profile-one.jpg';
// import postPhoto from '../../assets/images/profile/post-photo.jpg';
import TimeLine from "./section/timeline"
import About from "./section/About"
import Album from "./section/Album"
import Sitting from "./section/Sitting"
class Profile2 extends Component {
	state = {};
	render() {
		return (
			<section className="timeline">
				<div className="container">
					<div className="timeline-cover">
						<div className="timeline-nav-bar hidden-sm hidden-xs">
							<div className="row">
								<div className="col-md-3">
									<div className="profile-info">
										<img src={profileLogo} alt="fghj" className="img-responsive profile-photo" />
										<h3>
											{' '}
											<a href="/" className="profile-link">
												Sarah Cruiz
											</a>{' '}
										</h3>
										<p className="text-muted">Creative Director</p>
									</div>
								</div>
								<div className="col-md-9">
									<ul className="list-inline profile-menu">
										<li>
											<NavLink to="/profile/" exact>Timeline</NavLink>
										</li>
										<li>
                                            <NavLink to="/profile/about">About</NavLink>
										</li>
										<li>
                                            <NavLink to="/profile/album">Album</NavLink>
										</li>
										<li>
                                            <NavLink to="/profile/sitting">Sitting</NavLink>
										</li>		
									</ul>
									<ul className="follow-me list-inline">
										<li>1,299 people following her</li>
										<li>
											<button className=" btn btn-primary">Add Friend</button>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="navbar-mobile hidden-lg hidden-md">
							<div className="profile-info">
								<img src={profileLogo} alt="fgh" className="img-responsive profile-photo" />
								<h4>Sarah Cruiz</h4>
								<p className="text-muted">Creative Director</p>
							</div>
							<div className="mobile-menu">
								<ul className="list-inline">
									<li>
										<a href="timline.html">Timeline</a>
									</li>
									<li>
										<a href="timeline-about.html">About</a>
									</li>
									<li>
										<a href="timeline-album.html" className="active">
											Album
										</a>
									</li>
									<li>
										<a href="timeline-friends.html">Friends</a>
									</li>
								</ul>
								<button className="btn-primary">Add Friend</button>
							</div>
						</div>
					</div>
                    {/* <div id="page-contents" className="page-contents" style={{ position: 'relative' }}>
				<div class="row">
					<div class="col-md-3" /> */}
                    <Route exact path="/profile"  component={TimeLine}/>
                    <Route exact path="/profile/about"  component={About}/>
                    <Route exact path="/profile/album"  component={Album}/>
					<Route exact path="/profile/sitting"  component={Sitting}/>
					{/* <div class="col-md-2 static">
						<div id="sticky-sidebar" class="">
							<h6 className="gray-text">Sarah's activity</h6>
							<div class="feed-item">
								<div class="live-activity">
									<p>
										<a href="#" class="profile-link">
											Sarah
										</a>{' '}
										Commended on a Photo
									</p>
									<p class="text-muted">5 mins ago</p>
								</div>
							</div>
							<div class="feed-item">
								<div class="live-activity">
									<p>
										<a href="#" class="profile-link">
											Sarah
										</a>{' '}
										Has posted a photo
									</p>
									<p class="text-muted">an hour ago</p>
								</div>
							</div>
							<div class="feed-item">
								<div class="live-activity">
									<p>
										<a href="#" class="profile-link">
											Sarah
										</a>{' '}
										Liked her friend's post
									</p>
									<p class="text-muted">4 hours ago</p>
								</div>
							</div>
							<div class="feed-item">
								<div class="live-activity">
									<p>
										<a href="#" class="profile-link">
											Sarah
										</a>{' '}
										has shared an album
									</p>
									<p class="text-muted">a day ago</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
					
                </div>
			</section>
		);
	}
}

export default Profile2;
