import React, { Component } from 'react';
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
				

			</div>
		)
	}
}
export default Search