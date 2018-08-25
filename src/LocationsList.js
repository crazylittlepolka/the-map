import React, { Component } from 'react';

class LocationsList extends Component {

	showInfoWindow = () => this.props.markers.map(marker => {
		if (marker.id === this.props.location.venue.id) {
												
			this.props.updateInfoWindow(`${this.props.location.venue.name} ${this.props.lat.toFixed(5)}, ${this.props.lng.toFixed(5)}`);
			this.props.openInfoWindow(marker);
			marker.setAnimation(window.google.maps.Animation.BOUNCE);
			setTimeout( () => {
				marker.setAnimation(null)
			}, 3000);
		} else {
			marker.setAnimation(null)
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
export default LocationsList;
      
      