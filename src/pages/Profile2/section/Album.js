import React, { Component } from 'react';
import postG from "../../../assets/images/profile/post-g.jpg"
class Album extends Component {
    state = {  }
    render() {
        return (
          <div id="page-contents" className="page-contents" style={{ position: 'relative' }}>
				<div className="row">
					<div className="col-md-3" />
          <div className="col-md-7">
                <ul className="album-photos">
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
                <li>
                  <div className="img-wrapper">
                    <img src={postG} alt="album" />
                  </div>
                </li>
              </ul>
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

export default Album;