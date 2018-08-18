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

		          style = { style }
		          google = { this.props.google }
		          onClick = { this.onMapClick }
		          zoom = { 12 }
		          initialCenter = { this.props.initialCenter }
		        >
		          <Marker
		            onClick = { this.onMarkerClick }
		            title = { 'the place'  }
		            position = { this.props.initialCenter} 
		            name = { 'the place'  }
		          />
		          <InfoWindow
		            marker = { this.props.activeMarker }
		            visible = { this.props.showingInfoWindow }
		          >
		          	<div>
		            	<p>test</p>
		            </div>
		          </InfoWindow>
		        </Map>
			</div>
		)
	}
}
export default MapItem