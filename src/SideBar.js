import React, { Component } from 'react';

class SideBar extends Component {


	render() {
		

		return (
			<button 
				id="sidebar-button"
				
				onclick= { this.props.updateBar }
			>
				Search
			</button>
		)
	}
}
export default SideBar;