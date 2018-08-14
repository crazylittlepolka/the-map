import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';

class MarkerItem extends Component {
	 

  render() {
    return (
      <div>

        <Marker position={ this.props.position }>
        
        </Marker>

      </div>
    )
  }
}

export default MarkerItem;