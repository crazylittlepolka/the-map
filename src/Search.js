import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import LocationsList from './LocationsList'

class Search extends Component {

	/*constructor(props) {
		super(props)
		this.state = {
			query: '',
			matchingLocations: props.locations			
		}
	}

	displayQuery = (query) => {
    	this.setState(
      		{ query }, 
      		this.theSearch
    	)
  	}*/

  	//method from Udacity lessons
  	/*theSearch = (query) => {

  		if (this.state.query) {
  			const match = new RegExp(escapeRegExp(this.state.query), 'i')

  			this.setState({ matchingLocations : this.props.locations.filter(location =>
  				match.test(location.venue.name)) } 
  			)
  		} else {
  			this.setState({ matchingLocations : this.props.locations })
  		}
  	}*/

	render() {
		
		return (
			<div>
				
				{this.props.matchingLocations.map(location => {
//					const isMatching = !this.state.query || this.state.matchingLocations.find(ml => {
//						return ml.venue.id === location.venue.id
//					})

//					if(!isMatching) return null;					 					

						return (
							<LocationsList
								key={ location.venue.id } 
								//locations={ this.state.locations }
								markers={ this.props.markers }
								//contentString={ this.props.contentString}
								location={ location }
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

