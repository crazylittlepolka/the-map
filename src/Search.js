import React, { Component } from 'react';

import LocationsList from './LocationsList'

class Search extends Component {

	render() {		
		return (
			<div>
				
				{this.props.matchingLocations.map(location => {				 					

						return (
							<LocationsList
								key={ location.venue.id } 
								markers={ this.props.markers }
								location={ location }
								lat = { this.props.lat }
								lng = { this.props.lng }
            					updateInfoWindow= { this.props.updateInfoWindow }
        						openInfoWindow={ this.props.openInfoWindow }        						
							/>
						)						 
					})
				}
			</div>
		)
	}
}
export default Search
