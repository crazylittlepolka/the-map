import React, { Component } from 'react';
import LocationsList from './LocationsList'
import './App.css';

class Search extends Component {

	state = {
		query: '',
		matchingLocations: []
	}

	displayQuery = (query) => {
    	this.setState(
      		{ query }, this.showSearch
    	)
  	}



	render() {
		console.log(this.state.query)
		return (
			<div className="search">

				<input
					type="text"
					placeholder="Search for the park"
					value={ this.state.query }
					onChange={e => this.displayQuery(e.target.value)}
				>
				</input>
				
				{this.props.locations.map(location => {
						return (
							<LocationsList
								key={ location.venue.id } 
								locations={ this.props.locations }
								markers={ this.props.markers }
								location={ location }
								//openInfoWindow={ this.openInfoWindow }
								contentString={ this.props.contentString }
							/>
						)					
					})
				}
			</div>
		)
	}
}
export default Search