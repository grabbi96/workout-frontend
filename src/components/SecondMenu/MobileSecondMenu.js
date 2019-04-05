import React, { Component } from 'react';

import {MDBNavbarNav, MDBNavItem } from "mdbreact";
import {NavLink} from 'react-router-dom'
import "./MobileSecondMenu.css"
class MobileSecondMenu extends Component {
    state = {  }
    render() {
        return (
            <div className={[this.props.mobileMenuIsOpen ? "show-mobile-menu" : "", "second-menu", "second-menu-item-area" ].join(" ")}>
                  <div className="second-menu-area-inner">
                    <div className="mobile-menu-overlay" onClick={this.props.menuClose}></div>
                    <MDBNavbarNav left>
                        <div className="mw-menu-close-icon" onClick={this.props.menuClose}>
                            <div className="icon-bar"></div>
                            <div className="icon-bar"></div>
                        </div>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/dashboard">Dashbroad</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/message">Messages</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/notification">Notificaitons</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/event">Events</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/trips">Trips</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose}  className="nav-link" to="/profile">Profile</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/accomodation">Accommodations</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/restaurants">Food & Restaurants</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/friends">Friends</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink onClick={this.props.menuClose} className="nav-link" to="/contribution">Contribution</NavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </div>

                </div>
        );
    }
}

export default MobileSecondMenu;