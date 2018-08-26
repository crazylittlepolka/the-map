import React, { Component } from 'react';

class SideBar extends Component {


	render() {
		

		return (
			<button 
				className="sidebar-button"
				
				onClick= { this.props.updateBar }
			>
				Park List
			</button>
		)
	}
}
export default SideBar;