import React, { Component } from 'react';
import './App.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
//import Map from './Map'

const mapboxToken = 'pk.eyJ1Ijoiam93aXRhIiwiYSI6ImNqajYyY3BwaDBlZGwzcnBsMWp5bjRmZDIifQ.5k65J4sEZtVfYuRLAHqwmQ';

class App extends Component {

    state = {
    lat: 52.229675,
    lng: 21.012230,
    zoom: 12,
  } 
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div className="App">
        <Map center={ position } zoom={ this.state.zoom }>
          <TileLayer 
          attribution='&copy; <a href="https://www.osm.org/">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={ position }>
        </Marker>
        </Map>
      </div>
    );
  }
}

export default App;
