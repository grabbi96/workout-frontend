import React, { Component } from 'react';
import "./section.css"

class Sitting extends Component {
    state = {  }
    render() {
        return (
            <div id="page-contents">
                <div className="row">
                    <div className="col-md-3">
                        <ul className="edit-menu">
                            <li className="active"><i className="icon ion-ios-information-outline"></i><a href="edit-profile-basic.html">Basic Information</a></li>
                            <li><i className="icon ion-ios-briefcase-outline"></i><a href="edit-profile-work-edu.html">Education and Work</a></li>
                            <li><i className="icon ion-ios-heart-outline"></i><a href="edit-profile-interests.html">My Interests</a></li>
                            <li><i className="icon ion-ios-settings"></i><a href="edit-profile-settings.html">Account Settings</a></li>
                            <li><i className="icon ion-ios-locked-outline"></i><a href="edit-profile-password.html">Change Password</a></li>
                        </ul>
                    </div>
                    <div className="col-md-7">

                        <div className="edit-profile-container">
                            <div className="block-title">
                                <h4 className="grey-text"><i className="icon ion-android-checkmark-circle"></i>Edit basic information</h4>
                                <div className="line"></div>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                <div className="line"></div>
                            </div>
                            <div className="edit-block">
                                <form name="basic-info" id="basic-info" className="form-info">
                                    <div className="row mb-4">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="firstname">First name</label>
                                            <input id="firstname" className="form-control input-group-lg" type="text" name="firstname" title="Enter first name" placeholder="First name" value="John" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="lastname" className="">Last name</label>
                                            <input id="lastname" className="form-control input-group-lg" type="text" name="lastname" title="Enter last name" placeholder="Last name" value="Doe" />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="email">My email</label>
                                            <input id="email" className="form-control input-group-lg" type="text" name="Email" title="Enter Email" placeholder="My Email" value="razor.venon@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <label className="custom-label"><strong>Date of Birth</strong></label>
                                        <div className="form-group col-md-3 col-xs-6">
                                            <label htmlFor="month" className="sr-only"></label>
                                            <select className="form-control" id="day">
                                                <option value="Day">Day</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                                <option>11</option>
                                                <option>12</option>
                                                <option>13</option>
                                                <option>14</option>
                                                <option>15</option>
                                                <option>16</option>
                                                <option>17</option>
                                                <option>18</option>
                                                <option selected="">19</option>
                                                <option>20</option>
                                                <option>21</option>
                                                <option>22</option>
                                                <option>23</option>
                                                <option>24</option>
                                                <option>25</option>
                                                <option>26</option>
                                                <option>27</option>
                                                <option>28</option>
                                                <option>29</option>
                                                <option>30</option>
                                                <option>31</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-3 col-xs-6">
                                            <label htmlFor="month" className="sr-only"></label>
                                            <select className="form-control" id="month">
                                                <option value="month">Month</option>
                                                <option>Jan</option>
                                                <option>Feb</option>
                                                <option>Mar</option>
                                                <option>Apr</option>
                                                <option>May</option>
                                                <option>Jun</option>
                                                <option>Jul</option>
                                                <option>Aug</option>
                                                <option>Sep</option>
                                                <option>Oct</option>
                                                <option>Nov</option>
                                                <option selected="">Dec</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6 col-xs-12">
                                            <label htmlFor="year" className="sr-only"></label>
                                            <select className="form-control" id="year">
                                                <option value="year">Year</option>
                                                <option selected="">2000</option>
                                                <option>2001</option>
                                                <option>2002</option>
                                                <option>2004</option>
                                                <option>2005</option>
                                                <option>2006</option>
                                                <option>2007</option>
                                                <option>2008</option>
                                                <option>2009</option>
                                                <option>2010</option>
                                                <option>2011</option>
                                                <option>2012</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group gender mb-4">
                                        <span className="custom-label"><strong>I am a: </strong></span>
                                        <label className="radio-inline">
                                            <input type="radio" name="optradio" checked="" />Male
                                        </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="optradio" />Female
                                        </label>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="city"> My city</label>
                                            <input id="city" className="form-control input-group-lg" type="text" name="city" title="Enter city" placeholder="Your city" value="New York" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="country">My country</label>
                                            <select className="form-control" id="country">
                                                <option value="country">Country</option>
                                                <option value="AFG">Afghanistan</option>
                                                <option value="ALA">Ƭand Islands</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="my-info">About me</label>
                                            <textarea id="my-info" name="information" className="form-control" placeholder="Some texts about me" rows="4" cols="400" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur"></textarea>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 static">

                        <div id="sticky-sidebar" className="is_stuck">
                            <h4 className="grey-text">Sarah's activity</h4>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p><a href="/" className="profile-link">Sarah</a> Commended on a Photo</p>
                                    <p className="text-muted">5 mins ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p><a href="/" className="profile-link">Sarah</a> Has posted a photo</p>
                                    <p className="text-muted">an hour ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p><a href="/" className="profile-link">Sarah</a> Liked her friend's post</p>
                                    <p className="text-muted">4 hours ago</p>
                                </div>
                            </div>
                            <div className="feed-item">
                                <div className="live-activity">
                                    <p><a href="/" className="profile-link">Sarah</a> has shared an album</p>
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

export default Sitting;