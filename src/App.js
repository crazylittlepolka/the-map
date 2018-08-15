import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";


import './App.css';
import * as parks from './parks';


class App extends Component {

    state = {
    lat: 52.229675,
    lng: 21.012230,
    zoom: 13,
  } 
  const myMap = withScriptjs(withGoogleMap((props) => (<GoogleMap />)));

  render() {
    
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="App">
        <GoogleMap
          defaultZoom={14}
          center={ { lat:  42.3601, lng: -71.0589 } }
          >
       
      </GoogleMap>
   
      </div>
    );
  }
}

export default App;
