import React, { Component } from 'react';
//import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import './App.css';
//import MapItem from './MapItem'

import axios from 'axios'

const initialCenter = { lat: 52.229675, lng: 21.012230 };

class App extends Component {

//functions are invoked
  componentDidMount(){
    this.getData()
    this.loadMap()
    
  }

  //function to load built map
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDX3Iq_WqGPYBaVmHvfMcydqRyUg1b2M6I&callback=initMap")
    window.initMap = this.initMap
  }
  //function to get data from foursquare
  getData = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters ={
      client_id: "BNQJOE5SN2UNORIBLE0WO0GPVVFR3J0PG2ZRQ3TUXVNQJXM2",
      client_secret: "OAHDTPWMAIMIXUP4YZERT4FVQN50HACM20I4M23V1RG4EPXH",
      requestId: "5b77fe52dd579704658e06b5",
      near: "Warsaw",
      v: "20180818"
    }
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response =>{
      console.log(response)
    })
    .catch(error => {
      console.log("ERROR", error)
    })


  }

  //function to build the map
  initMap = () => {
    
    var map = new window.google.maps.Map(document.getElementById('mapid'), {
      zoom: 12,
      center: initialCenter
    });
  }
    render() {

      return (
        <main>
          <div className="map-item"></div>
        </main>
      );
    }
  }

function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0]
  const script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  //adding the child to parent Node
  index.parentNode.insertBefore(script, index)
}

export default App;



