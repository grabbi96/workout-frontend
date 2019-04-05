import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthentication === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
} 

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};




// const PrivateRoute = ({component: Component, authenticated, ...rest}) =>{
//   console.log(authenticated)
//   return (
//     <Route
//       {...rest}
//       render={(props) => authenticated === true
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
//     />
//   )
// }
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);