import React, { Component } from "react";
import {Route, Switch,  withRouter} from 'react-router-dom'
import PrivateRoute from "./components/Common/PrivateRoute"
import Media from 'react-media';
import "./index.css";
import {connect} from 'react-redux'

import {getContribution} from "./store/actions/category"

// core components
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
// import Auxs from "./components/Auxs/Auxs"

// page components
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Contribution from './pages/Contribution/Contribution'
import Event from './pages/Event/Event'
import EventDetails from "./pages/Event/EventDetails/EventDetails"
import ContributionAdd from './pages/Contribution-Add/ContributionAdd'
import ContributionView from './pages/Contribution-View/ContributionView'
import AddEvent from './pages/Add-Event/Add-Event'
import Notification from './pages/Notification/Notification'
// import Message from './pages/Message/Message'
// import Profile from './pages/Profile/Profile'
import Profile2 from './pages/Profile2/Profile2'
import EditProfile from './pages/Profile/Edit-Profile/Edit-Profile'
import Chat from './pages/Message/chat'
import Friends from './pages/Friends/Friends'
import ChatContent from './pages/Message/section/ChatContent'
import Errorpage from './pages/Error/Error'
import FoodRestuarent from './pages/FoodRestuarent/FoodRestuarent'
import FRDetails from './pages/FoodRestuarent/FRDetails/FRDetails'
import Accomodation from './pages/Accomodation/Accomodation'
import AHDetails from './pages/Accomodation/AHDetails/AHDetails'
import Trips from './pages/Trips/Trips'
import TripsDetails from "./pages/Trips/TripsDetails/TripsDetails"
import MobileSecondMenu from "./components/SecondMenu/MobileSecondMenu"
class App extends Component {
  state = {
    mobileMenuIsOpen:false
  }
  mobileMenuToggle = () =>{
    this.setState({
      mobileMenuIsOpen:!this.state.mobileMenuIsOpen
    })
  }
  componentDidMount(){
    // this.props.getContribution()
  }
  render() {
    return (
      <div className="App">
          {/*Header*/}
          <MobileSecondMenu mobileMenuIsOpen={this.state.mobileMenuIsOpen} menuClose={this.mobileMenuToggle} />
        <Header mobileMenuHandler={this.mobileMenuToggle}></Header>
          {/*Second Menu*/}
        {/* <SecondMenu></SecondMenu> */}
        <main className="app-main">
          {/*Route of All pages*/}
        
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              
              
              
              <PrivateRoute exact path="/contribution" component={Contribution} />
              <PrivateRoute exact path="/event" component={Event}/>
              <PrivateRoute exact path="/event/details" component={EventDetails}/>
              <PrivateRoute exact path="/event/add" component={AddEvent}/>
              <PrivateRoute exact path="/contribution/add" component={ContributionAdd}/>
              <PrivateRoute  path="/contribution/view/:con_id" component={ContributionView}/>
              <PrivateRoute exact path="/notification" component={Notification} />
              <Route exact path="/message" component={Chat} />
              <Route path="/profile/" component={Profile2} />
              <Route exact path="/profile/edit" component={EditProfile} />
              <PrivateRoute exact path="/chat" component={Chat} />
              <PrivateRoute exact path="/friends" component={Friends} />
              <PrivateRoute exact path="/restaurants" component={FoodRestuarent} />
              <PrivateRoute exact path="/restaurants/details" component={FRDetails} />
              <PrivateRoute exact path="/accomodation" component={Accomodation} />
              <PrivateRoute exact path="/accomodation/details" component={AHDetails} />
              <PrivateRoute exact path="/trips" component={Trips} />
              <PrivateRoute exact path="/trips/details" component={TripsDetails} />
              <Media query="(max-width: 768px)">
                {matches =>
                  matches ? (
                    <PrivateRoute exact path="/message/details" component={ChatContent} />
                 ) :  null   //   <Errorpage />
                }
              </Media>

        
        
        {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
        
        <Route component={Errorpage} />
        </Switch>
        {/*Footer*/}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
const mapStateToProps = state =>({
  auth:state.auth
})
export default withRouter(connect(mapStateToProps, {getContribution})(App));
