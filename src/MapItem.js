import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


const mapboxToken = 'pk.eyJ1Ijoiam93aXRhIiwiYSI6ImNqajYyY3BwaDBlZGwzcnBsMWp5bjRmZDIifQ.5k65J4sEZtVfYuRLAHqwmQ';


class MapItem extends Component {
	 

  render() {
    return (
      <div>

      	  <Map center={ this.props.position } zoom={ this.props.zoom }>
          <TileLayer 
          attribution='&copy; <a href="https://www.osm.org/">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={ this.props.position }>
        </Marker>
        </Map>
      </div>
    )
  }
}

export default MapItem;
