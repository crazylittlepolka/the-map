import React, { Component } from 'react';
import './App.css';

class LocationsList extends Component {

	showInfoWindow = e => {
		//open marker of clicked venue-park
		this.props.openInfoWindow(e.target.value)
	}
	
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