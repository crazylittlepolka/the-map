import React, { Component } from 'react';
import './App.css';
//import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MapItem from './MapItem'

const mapboxToken = 'pk.eyJ1Ijoiam93aXRhIiwiYSI6ImNqajYyY3BwaDBlZGwzcnBsMWp5bjRmZDIifQ.5k65J4sEZtVfYuRLAHqwmQ';

class App extends Component {

    state = {
    lat: 52.229675,
    lng: 21.012230,
    zoom: 13,
  } 
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="App">

        <MapItem
          zoom={ this.state.zoom }
          position={ position }
        />

      </div>
    );
  }
}

export default App;
