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
    query: '',
    openSearch: true,
    error: false
  }

  //functions are invoked
  componentDidMount(){
    this.getData();        
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
      radius: 4000,
      v: 20180818
    }

    //fetch the foursquare API
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(resp =>{
      this.setState({ 
        locations: resp.data.response.groups[0].items, 
        matchingLocations:  resp.data.response.groups[0].items,
        }, this.loadMap()
      )      
    })
    .catch(error => {
      console.log("ERROR Foursquare Data loading", error);
      this.setState({ error : true })
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
  theSearch = (query) => {  
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      this.setState({ matchingLocations: this.state.locations.filter(location => 
      match.test(location.venue.name)) },
        this.updateMarkerVisibility
       )     
    } else {
      this.setState({ matchingLocations: this.state.locations },
        this.updateMarkerVisibility
        )      
      }
  }

  //function to build the map
    initMap = () => {
      
      const map = new window.google.maps.Map(document.getElementById('map-item'), {
        zoom: 12,
        center: initialCenter,
        disableDefaultUI: true
      });

      this.map = map;
    
      const infoWindow = new window.google.maps.InfoWindow({ maxWidth: 100});
      this.infoWindow = infoWindow;

      this.createMarkers();
    }

  //update markers visibility 
  updateMarkerVisibility = () => {
    this.state.markers.forEach(marker => {
      const isVisible = this.state.matchingLocations.find(location => location.venue.id === marker.id);
      marker.setMap(isVisible ? this.map : null);
    })
  }

  //function to create markers
  createMarkers = () => {
    const newMarkers = []; //markers after filtering by search

    this.state.locations.map(location => {

      const {lat, lng } = location.venue.location;
      this.lat = lat;
      this.lng = lng;
      const contentString = `${location.venue.name} ${lat.toFixed(5)}, ${lng.toFixed(5)}`;            

      const marker = new window.google.maps.Marker({
        position: {lat: lat, lng: lng},
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
      newMarkers.push(marker)
      
    })
    this.setState({ markers: newMarkers});
  }

  //function to open/hide search sidebar
  updateBar = () => {
    const barIsOpen = this.state.openSearch;
    this.setState({ openSearch : !barIsOpen })
  }

  render() {    
      //error handler
      if(this.state.error) {

        return <Error />

      } else {

        return (
          <div role="application" className="layout">
            <header className="layout__header header">

              <button aria-label="show/hide parks list" className="header__button"               
                onClick= { this.updateBar }
              >
                <i class="fa fa-bars"></i>
                Parks List
              </button>

              <h1 className="header__title">Discover Green Fields of Warsaw</h1>
            </header>

            <aside role="navigation" aria-label="park list"className={`layout__sidebar${ this.state.openSearch ? ' layout__sidebar--open' : ''}`}>
              <input
                role="search"
                type="text"
                placeholder="Park Search"
                value={ this.state.query }
                onChange={e => this.displayQuery(e.target.value)}
              >
              </input>

              <Search
                locations={ this.state.locations }
                matchingLocations={ this.state.matchingLocations }
                markers={ this.state.markers }
                lat = { this.lat }
                lng = { this.lng }
                updateInfoWindow= { this.updateInfoWindow }
                openInfoWindow={ this.openInfoWindow }
              />
            </aside>

            <main role="presentation" aria-label="map" className="layout__main">
              <div id="map-item"></div>
            </main>
            <footer>Park information from foursquare.com</footer>
          </div>
        );
      }
  }
}

function loadScript(url) {
  const index = window.document.getElementsByTagName("script")[0]
  const script = window.document.createElement("script")
  script.src = url
  script.onerror = function() { document.getElementById("map-item").innerHTML = "Something went wrong !!! </br>The map could not be loaded !!! </br> Check Console for details"}
  script.async = true
  script.defer = true
  //adding the child to parent Node
  index.parentNode.insertBefore(script, index)
}

export default App;