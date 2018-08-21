import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import LocationsList from './LocationsList'
import './App.css';

class Search extends Component {

	constructor(props) {
		super(props)
		this.state = {
			query: '',
			matchingLocations: props.locations
		}
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
				
				{this.props.locations.map(location => {
					const isMatching = !this.state.query || this.state.matchingLocations.find(ml => {
						return ml.venue.id === location.venue.id
						})
						
						if(!isMatching) return null;

						return (
							<LocationsList
								key={ location.venue.id } 
								locations={ this.state.locations }
								markers={ this.props.markers }
								location={ location }
								updateInfoWindow={ this.updateInfoWindow }
								openInfoWindow={ this.openInfoWindow }
							/>
						)
						 
					})
				}
			</div>
		)
	}
}
export default Search