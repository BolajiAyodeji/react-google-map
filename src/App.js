import React, { Component } from 'react';
import { Map, GoogleAPiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map 
       google={this.props.google}
       zoom={14}
       style={mapStyles}
       initialCenter={{
         lat: 7.802359,
         lng: 6.743005
       }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
})(MapContainer);