import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import React, {Component} from "react";

const mapStyles = {
    width: '100%',
    height: '100%'
  };

  class SanJoseMap extends Component{
    state = {
      showingInfoWindow: false,  //Hides or the shows the infoWindow
      activeMarker: {},          //Shows the active marker upon click
      selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
      this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
      });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};

    render(){
      return(
        <div className="google-maps-component col-md-6">
        <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{lat: 37.3353,lng: -121.8803}}
        >
        <Marker
            onClick={this.onMarkerClick}
            name={'My Villa'}
            />
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
        >
        <div>
            <h4>{this.state.selectedPlace.name}</h4>
        </div>
        </InfoWindow>
        </Map>
    </div>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCA81-0kQKRBGJ8ueJ7Z2_cHx2VDAwPROw '
  })(SanJoseMap);