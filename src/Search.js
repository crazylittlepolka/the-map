import React, { Component } from 'react';
import LocationsList from './LocationsList'
import './App.css';

class Search extends Component {

	render() {

		return (
			<div className="search">

				<input
					type="text"
					placeholder="Search for the park"
				>
				</input>
				
				{this.props.locations.map(location => {
						return (
							<LocationsList
								key={ location.venue.id } 
								locations={ this.props.locations }
								location={ location }

							/>
						)					
					})
				}
			</div>
		)
	}
}
export default Search