import React, { Component } from 'react';


class LocationsList extends Component {



	showInfoWindow = () => this.props.markers.map(marker => {
		if (marker.id === this.props.location.venue.id) {
						
			
			//console.log(contentString)
			//marker.addListener('click', () => {

				const infoWindow = new window.google.maps.InfoWindow()
				const contentString = `${this.props.location.venue.name} address: ${this.props.location.venue.location.address}`
        		//change the infoWindow content when we change the clicked marker
        		infoWindow.setContent(contentString);
                
		        //infoWindow of clicked marker opens
		        infoWindow.open(this.props.map, marker);

        		console.log('event', contentString)
     		//}) 

			//this.props.updateInfoWindow(this.props.location.venue.name)
			//this.props.openInfoWindow(marker)
			marker.setAnimation(window.google.maps.Animation.BOUNCE)
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

      
      