import React, { Component } from 'react';
import profileLogo from '../../../assets/images/profile/profile-one.jpg';
import postPhoto from '../../../assets/images/profile/post-photo.jpg';

class timeline extends Component {
	state = {};
	render() {
		return (
			<div id="page-contents" className="page-contents" style={{ position: 'relative' }}>
				<div className="row">
					<div className="col-md-3" />
                    <div className="col-md-7">
						{/* <!-- Post Create Box
              ================================================= --> */}
						<div className="create-post">
							<div className="row">
								<div className="col-md-7 col-sm-7">
									<div className="form-group">
										<img src={profileLogo} alt="asdf" className="profile-photo-md" />
										<textarea
											name="texts"
											id="exampleTextarea"
											cols="30"
											rows="1"
											className="form-control"
											placeholder="Write what you wish"
										/>
									</div>
								</div>
								<div className="col-md-5 col-sm-5">
									<div className="tools">
										<ul className="publishing-tools list-inline">
											<li>
												<a href="/">
													<i className="far fa-edit" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fas fa-images" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fas fa-video" />
												</a>
											</li>
											<li>
												<a href="/">
													<i className="fas fa-video" />
												</a>
											</li>
										</ul>
										<button className="btn btn-primary pull-right">Publish</button>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Post Create Box End--> */}

						{/* <!-- Post Content */}
						{/* ================================================= --> */}
						<div className="post-content">
							{/* <!--Post Date--> */}
							<div className="post-date hidden-xs hidden-sm">
								<h5>Sarah</h5>
								<p className="text-grey">Sometimes ago</p>
							</div>
							{/* <!--Post Date End--> */}

							<img src={postPhoto} alt="post" className="img-responsive post-image" />
							<div className="post-container">
								<img src={profileLogo} alt="user" className="profile-photo-md pull-left" />
								<div className="post-detail">
									<div className="user-info">
										<h5>
											<a href="timeline.html" className="profile-link">
												Sarah Cruiz
											</a>{' '}
											<span className="following">following</span>
										</h5>
										<p className="text-muted">Published a photo about 15 mins ago</p>
									</div>
									<div className="reaction">
										<a href="/" className="text-green">
											<i className="icon ion-thumbsup" /> 13
										</a>
										<a href="/" className="text-red">
											<i className="fa fa-thumbs-down" /> 0
										</a>
									</div>
									<div className="line-divider" />
									<div className="post-text">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
											<i className="em em-anguished" /> <i className="em em-anguished" />{' '}
											<i className="em em-anguished" />
										</p>
									</div>
									<div className="line-divider" />
									<div className="post-comment">
										<img src={profileLogo} alt="asdf" className="profile-photo-sm" />
										<p>
											<a href="timeline.html" className="profile-link">
												Diana{' '}
											</a>
											<i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud{' '}
										</p>
									</div>
									<div className="post-comment">
										<img src={profileLogo} alt="asdf" className="profile-photo-sm" />
										<p>
											<a href="timeline.html" className="profile-link">
												John
											</a>{' '}
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud{' '}
										</p>
									</div>
									<div className="post-comment">
										<img src={profileLogo} alt="asdf" className="profile-photo-sm" />
										<input type="text" className="form-control" placeholder="Post a comment" />
									</div>
								</div>
							</div>
						</div>
						{/* 
              <!-- Post Content
              ================================================= --> */}
						<div className="post-content">
							{/* <!--Post Date--> */}
							<div className="post-date hidden-xs hidden-sm">
								<h5>Sarah</h5>
								<p className="text-grey">10/22/2016</p>
							</div>
							{/* <!--Post Date End--> */}

							<img src={postPhoto} alt="post" className="img-responsive post-image" />
							<div className="post-container">
								<img src={profileLogo} alt="user" className="profile-photo-md pull-left" />
								<div className="post-detail">
									<div className="user-info">
										<h5>
											<a href="timeline.html" className="profile-link">
												Sarah Cruiz
											</a>{' '}
											<span className="following">following</span>
										</h5>
										<p className="text-muted">Yesterday</p>
									</div>
									<div className="reaction">
										<a href="/" className="text-green">
											<i className="icon ion-thumbsup" /> 49
										</a>
										<a href="/" className="text-red">
											<i className="fa fa-thumbs-down" /> 0
										</a>
									</div>
									<div className="line-divider" />
									<div className="post-text">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
											<i className="em em-anguished" /> <i className="em em-anguished" />{' '}
											<i className="em em-anguished" />
										</p>
									</div>
									<div className="line-divider" />
									<div className="post-comment">
										<img src={profileLogo} alt="asdf" className="profile-photo-sm" />
										<p>
											<a href="timeline.html" className="profile-link">
												Diana{' '}
											</a>
											<i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud{' '}
										</p>
									</div>
									<div className="post-comment">
										<img src={profileLogo} alt="asdf" className="profile-photo-sm" />
										<p>
											<a href="timeline.html" className="profile-link">
												John
											</a>{' '}
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud{' '}
										</p>
									</div>
									<div className="post-comment">
										<img src={profileLogo} alt="asdf" className="profile-photo-sm" />
										<input type="text" className="form-control" placeholder="Post a comment" />
									</div>
								</div>
							</div>
						</div>

						<div className="post-content">
							{/* <!--Post Date--> */}
							<div className="post-date hidden-xs hidden-sm">
								<h5>Sarah</h5>
								<p className="text-grey">10/21/2016</p>
							</div>

							<div className="post-container">
								<img src={postPhoto} alt="user" className="profile-photo-md pull-left" />
								<div className="post-detail">
									<div className="user-info">
										<h5>
											<a href="timeline.html" className="profile-link">
												Sarah Cruiz
											</a>{' '}
											<span className="following">following</span>
										</h5>
										<p className="text-muted">2 days ago</p>
									</div>
									<div className="reaction">
										<a href="/" className="text-green">
											<i className="fa fa-thumbs-up" /> 49
										</a>
										<a href="/" className="text-red">
											<i className="fa fa-thumbs-down" /> 0
										</a>
									</div>
									<div className="line-divider" />
									<div className="post-text">
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.{' '}
											<i className="em em-anguished" /> <i className="em em-anguished" />{' '}
											<i className="em em-anguished" />
										</p>
									</div>
									<div className="line-divider" />
									<div className="post-comment">
										<img src={profileLogo} alt="sda" className="profile-photo-sm" />
										<p>
											<a href="timeline.html" className="profile-link">
												Diana{' '}
											</a>
											<i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Ut enim ad minim veniam, quis nostrud{' '}
										</p>
									</div>
									<div className="post-comment">
										<img src={profileLogo} alt="asdf" className="profile-photo-sm" />
										<p>
											<a href="timeline.html" className="profile-link">
												John
											</a>{' '}
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud{' '}
										</p>
									</div>
									<div className="post-comment">
										<img src={profileLogo} alt="adsf" className="profile-photo-sm" />
										<input type="text" className="form-control" placeholder="Post a comment" />
									</div>
								</div>
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

export default timeline;
