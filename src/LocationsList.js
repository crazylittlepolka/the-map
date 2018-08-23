import React, { Component } from 'react';


class LocationsList extends Component {



	showInfoWindow = () => this.props.markers.map(marker => {
		if (marker.id === this.props.location.venue.id) {
												
			this.props.updateInfoWindow(`${this.props.location.venue.name} ${this.props.location.venue.location.lat.toFixed(5)}, ${this.props.location.venue.location.lng.toFixed(5)}`);
			this.props.openInfoWindow(marker);
			marker.setAnimation(window.google.maps.Animation.BOUNCE);
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
export default LocationsList

      
      