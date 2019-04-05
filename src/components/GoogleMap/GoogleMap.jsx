import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from 'prop-types';
class GoogleMap extends Component {
    state = {  }
    render() {
        const style = {
            width: '100%',
            height: '300px'
          }
        return (
            <Map
              google={this.props.google}
              initialCenter={{
                lat: this.props.lat,
                lng: this.props.lng
              }}
              zoom={14}
              style={style}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>google map</h1>
            </div>
        </InfoWindow>
      </Map>
        );
    }
}


// GoogleMap.propTypes = {
//   lat: PropTypes.number,
//   lng: PropTypes.number
// }


GoogleMap.defaultProps = {
  lat: 40.854885,
  lng: -88.081807
};
// AIzaSyArYegByvYPC6rfF3f7Zcf38DfGabHgRPg
 export default GoogleApiWrapper({
    apiKey: ("AIzaSyC15OkDyDw78Zt8T-PfZHdEpjodipGG8FY")
  })(GoogleMap)
