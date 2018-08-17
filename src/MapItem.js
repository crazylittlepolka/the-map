import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import './App.css';

class MapItem extends Component {

	render() {
		const style = {
     		width: '70vw',
     		height: '100vh',

    		}
		return (
			<div className="map-container">

				<Map
		          //item
		          //xs = { 12 }
		          style = { style }
		          google = { this.props.google }
		          onClick = { this.onMapClick }
		          zoom = { 12 }
		          initialCenter = { this.props.initialCenter }
		        >
		          <Marker
		            onClick = { this.onMarkerClick }
		            title = { 'Changing Colors Garage'  }
		            position = { this.props.initialCenter} 
		            name = { 'Changing Colors Garage'  }
		          />
		          <InfoWindow
		            marker = { this.props.activeMarker }
		            visible = { this.props.showingInfoWindow }
		          >
		            <p>test</p>
		          </InfoWindow>
		        </Map>
			</div>
		)
	}
}
export default MapItem