import React, { Component } from 'react';

class Error extends Component {

	render () {
		return (
			<div className="error">
				<i class="material-icons">error_outline</i>
				<p>Sorry, something went wrong!!!</p>
				<p>Aplication could not be loaded</p>
				<p>Check Developer's Tool Console</p>

			</div>
		)
	}

}

export default Error;