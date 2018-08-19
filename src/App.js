import React, { Component } from 'react';
import './App.css';
import Search from './Search'

import axios from 'axios'

const initialCenter = { lat: 52.229675, lng: 21.012230 };

class App extends Component {

  state = {
    locations: []
  }

//functions are invoked
  componentDidMount(){
    this.getData()
        
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
    axios.get(endPoint + new URLSearchParams(parameters))
    .then(response =>{
      this.setState({ locations: response.data.response.groups[0].items 
      }, this.loadMap())
      
    })
    .catch(error => {
      console.log("ERROR", error)
    })


  }

  //function to build the map
  initMap = () => {
    
    var map = new window.google.maps.Map(document.getElementById('map-item'), {
      zoom: 13,
      center: initialCenter
    });


    var infoWindow = new window.google.maps.InfoWindow() 

    //display markers
    this.state.locations.map(location => {

      var contentString = `${location.venue.name}`


      var marker = new window.google.maps.Marker({
        position: {lat: location.venue.location.lat, lng: location.venue.location.lng},
        map: map,
        title: location.venue.name
      })



      //function listening to the click on the marker
      marker.addListener('click', function() {

        //change the infoWindow content when we change the clicked marker
        infoWindow.setContent(contentString)

        //infoWindow of clicked marker opens
        infoWindow.open(map, marker);
      })
    })

  }
    render() {
      console.log(this.state.locations)
      return (
        <div>
          <h1>Beautiful Parks of Warsaw</h1>
          <div id="map-item"></div>

          <Search 
            locations={this.state.locations}
            
          />

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



