
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBContainer } from "mdbreact";
import './Header.css'
import {NavLink, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import UserProfile from "./UserProfile"
// import author from '../../assets/images/author-page.jpg'

class MobileHeaderTop extends Component {
  
render() {
  return (
       <MDBNavbar dark expand="md" className={["primary-menu", "mobile-top-primary-menu"].join(" ")}>
      <MDBContainer>
          <MDBNavbarNav className="mobile-top-Header">
          {
              !this.props.isAuthentication && (<MDBNavItem>
                <NavLink to="/register" className="text-white nav-link" ><FontAwesomeIcon icon={faPlug} /> Register</NavLink>
              </MDBNavItem>)
            }
          <MDBNavbarBrand>
            <Link to="/">
              <strong className="white-text">Walkout</strong>
            </Link>
          </MDBNavbarBrand>
            {
              this.props.isAuthentication && <UserProfile /> 
            }
            {
              !this.props.isAuthentication && (<MDBNavItem>
              <NavLink to="/login" className="text-white nav-link" ><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
              </MDBNavItem> )
            }
          </MDBNavbarNav>
        
            
      </MDBContainer>
    </MDBNavbar>
    
    
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthentication: state.auth.isAuthentication
  }
}

export default withRouter(connect(mapStateToProps)(MobileHeaderTop));