import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import LocationsList from './LocationsList'
import './App.css';

class Search extends Component {

	state = {
		query: '',
		matchingLocations: []
	}

	displayQuery = (query) => {
    	this.setState(
      		{ query }, this.theSearch
    	)
  	}

  	theSearch = (query) => {
  		

  		if (this.state.query) {
  			const match = new RegExp(escapeRegExp(this.state.query), 'i')

  			this.setState({ matchingLocations : this.props.locations.filter(location =>
  				match.test(location.venue.name)
  			)})
  		} else {
  			this.setState({ matchingLocations : this.props.locations})
  		}
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
				
				{this.state.matchingLocations.map(location => {
						return (
							<LocationsList
								key={ location.venue.id } 
								locations={ this.state.matchingLocations }
								markers={ this.props.markers }
								location={ location }								
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