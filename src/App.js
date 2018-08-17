import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import './App.css';
import MapItem from './MapItem'

const initialCenter = { lat: 39.648209, lng: -75.711185 };

class App extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}

  }

    // binding this to event-handler functions
    //this.onMarkerClick = this.onMarkerClick.bind(this);
    //this.onMapClick = this.onMapClick.bind(this);
  
  onMarkerClick = ( props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        //activeMarker: null
      });
    }
  }
  render() {

    return (
      <div className="map-item">

        <MapItem 
          google={ this.props.google}
          onMapClick={ this.onMapClick}
          onMarkerClick={this.onMarkerClick}
          showingInfoWindow={ this.state.showingInfoWindow}
          marker={ this.state.activeMarker}
          initialCenter={ initialCenter }
        />



      </div>
    );
  }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyDWkapN-2VRydSQWViAPvbjfTRZpzQM5zM')
})(App)


