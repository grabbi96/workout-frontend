import React, { Component } from 'react';
import author from '../../assets/images/author-page.jpg'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from "../../store/actions/authAction"
class UserProfile extends Component {
    state = {  }
    componentDidMount(){
      
    }
    render() {
        let {first_name, last_name} = this.props.user
        return (
            <div className="control-block ml-auto">
                <div className="author-thumb">
                    <img alt="author" src={author} className="avatar" />
                    <span className="icon-status online"></span>

                    <div className="more-dropdown more-with-triangle">
                        <div className="mCustomScrollbar ps ps--theme_default ps--active-y">
                            <div className="ui-block-title ui-block-title-small">
                                <h6 className="title">Your Account</h6>
                            </div>

                            <ul className="account-settings">
                                <li>
                                    <a href="29-YourAccount-AccountSettings.html">
                                        <i className="fas fa-sliders-h"></i>
                                        <span>Profile Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="36-FavPage-SettingsAndCreatePopup.html">
                                        <i className="fas fa-plus"></i>
                                        <span>Create Event Page</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/" onClick={event => {
                                        event.preventDefault()
                                        this.props.logout(this.props.history)
                                    }}>
                                        <i className="fas fa-sign-out-alt"></i>
                                        <span>Log Out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="author-name">
                    <h6 className="author-title">{first_name} {last_name}</h6>
                    <p>SPACE COWBOY</p>
                </div>
                <div className="author-arrow-option">
                    <i className="fas fa-angle-down"></i>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
      user: state.auth.user
    }
  }
export default withRouter(connect(mapStateToProps, {logout})(UserProfile));