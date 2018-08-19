import React, { Component } from 'react';
import './App.css';

class LocationsList extends Component {

	showInfoWindow = () => this.props.markers.map(marker => {
		if (marker.id === this.props.location.venue.id) {
						
			console.log('openInfoWindow')
		}
	})

	render() {
		const parkName = `${this.props.location.venue.name}`

		return (
			<div className="locations-list">

				<button
					onClick={ this.showInfoWindow }
				>
					{ parkName }
				</button>
			</div>
		)
	}
}
export default LocationsList