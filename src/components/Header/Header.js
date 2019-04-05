
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBContainer } from "mdbreact";
import './Header.css'
import {NavLink, Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from "../../store/actions/authAction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlug, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import SecondMenu from "../SecondMenu/SecondMenu"
import MobileHeaderTop from "./MobileHeaderTop"
// import author from '../../assets/images/author-page.jpg'
import UserProfile from './UserProfile'
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
            scroll:null,
          top:10
    };
    this.handleScroll = this.handleScroll.bind(this);
    
  }

handleScroll() {
  this.setState({scroll: window.scrollY});
}

componentDidMount() {
  // const el = document.querySelector('.primary-menu');
  window.addEventListener('scroll', this.handleScroll);
}

componentDidUpdate() {
  this.state.scroll > this.state.top ? 
    document.body.style.paddingTop = `${this.state.height}px` :
    document.body.style.paddingTop = 0;
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  let userAuth = (
    <MDBNavbarNav right>
          <MDBNavItem>
            <NavLink to="/register" className="text-white nav-link" ><FontAwesomeIcon icon={faPlug} /> Register</NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink to="/login" className="text-white nav-link" ><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
          </MDBNavItem>
        </MDBNavbarNav>
  )
  
  return (
    <div className={[this.state.scroll > this.state.top ? "fixed-nav" : "", "menu-container"].join(" ")}>
      <MDBNavbar dark expand="md" className={["primary-menu", "desktop-top-primary-menu"].join(" ")}>
      <MDBContainer>
        <MDBNavbarBrand>
            <Link to="/">
              <strong className="white-text">Walkout</strong>
            </Link>
          </MDBNavbarBrand>
          {/* <MDBNavbarToggler onClick={this.toggleCollapse} /> */}
          {/* <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar> */}
            {
              this.props.isAuthentication? <UserProfile /> : userAuth
            }
            
          {/* </MDBCollapse> */}
      </MDBContainer>
    </MDBNavbar>
    <MobileHeaderTop />
    {this.props.isAuthentication && <SecondMenu mobileMenuHandler={this.props.mobileMenuHandler} />}
    
    </div>
    
    
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthentication: state.auth.isAuthentication
  }
}

export default withRouter(connect(mapStateToProps, {logout})(Header));