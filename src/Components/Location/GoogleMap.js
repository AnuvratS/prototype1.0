import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
export class MapContainer extends Component {

  render() {

  const style = {
  width: '50%',
  height: '50%',
} 
    return (
      <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: 25.5941,
            lng: 85.1376
          }}
          zoom={6}
          onClick={this.onMapClicked}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAieIRwiP_gnQV5WKAJ1N4JwkZzO__yoog")
})(MapContainer)