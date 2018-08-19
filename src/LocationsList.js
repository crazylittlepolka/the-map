import React, { Component } from 'react';
import './App.css';

class LocationsList extends Component {

	render() {
		const parkName = `${this.props.location.venue.name}`

		return (
			<div className="locations-list">


				<button>{ parkName }</button>
				

			</div>
		)
	}
}
export default LocationsList