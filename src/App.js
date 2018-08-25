import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import Error from './Error'

import axios from 'axios'
import escapeRegExp from 'escape-string-regexp'

const initialCenter = { lat: 52.229675, lng: 21.012230 };

class App extends Component {

  state = {
    locations: [],
    matchingLocations: [],
    markers: [],
    matchingMarkers: [],
    query: '',
    error: false
  }

  //functions are invoked
  componentDidMount(){
    this.getData();
    if (window.google === undefined) {
      this.setState({ error: true})
    }
  }

  //function to load built map
  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDX3Iq_WqGPYBaVmHvfMcydqRyUg1b2M6I&callback=initMap")
    window.initMap = this.initMap
  }

  //function to get data from foursquare
  getData = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "BNQJOE5SN2UNORIBLE0WO0GPVVFR3J0PG2ZRQ3TUXVNQJXM2",
      client_secret: "OAHDTPWMAIMIXUP4YZERT4FVQN50HACM20I4M23V1RG4EPXH",
      categoryId: "4bf58dd8d48988d163941735",
      near: "Warsaw",
      v: 20180818
    }

    //fetch the foursquare API
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(resp =>{
      this.setState({ locations: resp.data.response.groups[0].items, matchingLocations:  resp.data.response.groups[0].items 
      }, this.loadMap())      
    })
    .catch(error => {
      console.log("ERROR", error);
      this.setState({ error: true })
    })
  }

  map = null;
  infoWindow = null;

  //infoWindow functions
  updateInfoWindow = (contentString) => {
    if (this.infoWindow) this.infoWindow.setContent(contentString);
  }

  openInfoWindow = (marker) => {
    if (this.infoWindow) this.infoWindow.open(this.map, marker);
  }

  //search function

  displayQuery = query => {
    this.setState({query}, this.theSearch)
  }
  theSearch = (query, latitude, longitude) => {  
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      this.setState({ matchingLocations: this.state.locations.filter(location => 
      match.test(location.venue.name)) } ),
      this.updateMarkers(latitude, longitude)
    } else {
      this.setState({ matchingLocations: this.state.locations }),
      this.updateMarkers(latitude, longitude)
    }
  }

  //function to build the map
    initMap = () => {
      
      const map = new window.google.maps.Map(document.getElementById('map-item'), {
        zoom: 13,
        center: initialCenter
      });

      this.map = map;
    
      const infoWindow = new window.google.maps.InfoWindow();
      this.infoWindow = infoWindow;

      //build and display markers
      this.updateMarkers();
    }

  updateMarkers = (latitude, longitude) => {

    this.state.matchingLocations.map(location => {

      const contentString = `${location.venue.name} ${location.venue.location.lat.toFixed(5)}, ${location.venue.location.lng.toFixed(5)}`
      
      const latitude = location.venue.location.lat;
      const longitude = location.venue.location.lng;

      const marker = new window.google.maps.Marker({
        position: {lat: latitude, lng: longitude},
        map: this.map,
        title: location.venue.name,
        id: location.venue.id,
        animation: window.google.maps.Animation.DROP
      })      

      //function listening to the click on the marker
      marker.addListener('click', () => {

        //change the infoWindow content when we change the clicked marker
        this.updateInfoWindow(contentString);
                
        //infoWindow of clicked marker opens
        this.openInfoWindow(marker);
      })      

      //adding animation to marker
      marker.addListener('mouseover', function() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
      })
      marker.addListener('mouseout', function() {
        marker.setAnimation() !== null
      })
      this.state.markers.push(marker)
    })

  }


  render() {
    console.log(this.state.matchingLocations)
    console.log(this.state.markers)
    return (
      
      <div role="application">       

        <h1>Beautiful Warsaw - find your favourite Green Field</h1>

        <div id="map-item"></div>
        <div className="search">
          <input
            type="text"
            placeholder="Search for the park"
            value={ this.state.query }
            onChange={e => this.displayQuery(e.target.value)}
          >
          </input>
          <Search 
            locations={ this.state.locations }
            matchingLocations={ this.state.matchingLocations }          
            markers={ this.state.markers }
            query={ this.state.query}
            updateInfoWindow= { this.updateInfoWindow }
            openInfoWindow={ this.openInfoWindow }
          />
        </div>
      </div>
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



