import React, { Component } from 'react';
import {MDBNavbarNav, MDBNavItem, MDBContainer } from "mdbreact";
import {NavLink} from 'react-router-dom'
import './SecondMenu.css'
class SecondMenu extends Component {

    render() {
        return (
          <div className="second-menu">
            <MDBContainer>
              <div className="nav-wrapper">

                <div className="mw-mobile-menu-icon" onClick={this.props.mobileMenuHandler}>
                  <div className="icon-bar"></div>
                  <div className="icon-bar"></div>
                  <div className="icon-bar"></div>
                </div>
                    <MDBNavbarNav left className="desktop">
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/dashboard">Dashbroad</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/message">Messages</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/notification">Notificaitons</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/event">Events</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/trips">Trips</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/profile">Profile</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/accomodation">Accommodations</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/restaurants">Food & Restaurants</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/friends">Friends</NavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <NavLink className="nav-link" to="/contribution">Contribution</NavLink>
                      </MDBNavItem>
                    </MDBNavbarNav>
                </div>
            </MDBContainer>
            
          </div>
        );
    }
}

export default SecondMenu;