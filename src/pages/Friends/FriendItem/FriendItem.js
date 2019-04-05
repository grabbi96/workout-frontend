import React, { Component } from 'react'
import {MDBCol} from 'mdbreact'
import Swiper from 'react-id-swiper';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import friends from '../../../assets/images/friend2.jpg'
import avatar from '../../../assets/images/avatar2.jpg'


class FriendItem extends Component {
    state = {  }
    render() {
        const params = {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            spaceBetween: 30
          }
        return (
            <MDBCol lg="3" md="4" size="6">
            <div className="ui-block">
                <div className="friend-item">
                    <div className="friend-header-thumb">
                        <img src={friends} alt="friend" />
                    </div>

                    <div className="friend-item-content">
                        
                        <div className="more">
                            <FontAwesomeIcon icon={faEllipsisV} />
                            <ul className="more-dropdown">
                                <li>
                                    <a href="/">Report Profile</a>
                                </li>
                                <li>
                                    <a href="/">Block Profile</a>
                                </li>
                                <li>
                                    <a href="/">Turn Off Notifications</a>
                                </li>
                            </ul>
                        </div>
                        <div className="friend-avatar">
                            <div className="author-thumb">
                                <img src={avatar} alt="author" />
                            </div>
                            <div className="author-content">
                                <a href="/" className="h5 author-name">Marina Valentine</a>
                                <div className="country">Long Island, NY</div>
                            </div>
                        </div>

                            <Swiper {...params}>
                                <div>
                                <div className="friend-count" data-swiper-parallax="-500" >
                                    <a href="/" className="friend-count-item">
                                        <div className="h6">52</div>
                                        <div className="title">Friends</div>
                                    </a>
                                    <a href="/" className="friend-count-item">
                                        <div className="h6">240</div>
                                        <div className="title">Photos</div>
                                    </a>
                                    <a href="/" className="friend-count-item">
                                        <div className="h6">16</div>
                                        <div className="title">Videos</div>
                                    </a>
                                </div>
                                <div className="control-block-button" >
                                    <a href="/" className="primary-color">
                                        <i className="far fa-grin-wink"></i>
                                    </a>
            
                                    <a href="/" className="secondary-color-dark">
                                        <i className="far fa-comment-alt"></i>  
                                    </a>
            
                            </div>
                                </div>
                                <div>
                                    <p className="friend-about" >
                                        Hi!, I’m Marina and I’m a Community Manager for “Gametube”. Gamer and full-time mother.
                                    </p>
                                    <div className="friend-since" >
                                        <p>Friends Since:</p>
                                        <div className="h6">December 2014</div>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </MDBCol>
        );
    }
}

export default FriendItem;