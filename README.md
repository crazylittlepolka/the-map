# The-map Application

This is the Udacity Google Front-End Developer Nanodegree Scholarship project coded with React library, GoogleMaps API and Foursquare.com API.

## The Functionality

The-map app allows user to discover and search throught Green Fields of Warsaw: Parks, Garden and Forests.

The application's opening page displays map of Warsaw with markers showing Green Fields places and list of them on the left side. The list can easily be closed/open by clicking on Parks List button.
User can search for the park by typing park name in Park Search input window. The list beneath will show filtered list by user query and on the map there will be markers of only filtered places.
By clicking on park name or chosen marker InfoWindow with park name and its Lat/Lng position will be displayed. InfoWindow can be closed by clicking on x in the top/right corner.

Should user have loading issues the respective alert will appear on the screen.

## To get started:

* clone or download the repository
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Production mode
* run the production mode with `npm run build`
* navigate to the build directory and install static server with `npm install -g serve`
* run the server with `serve -s build`
* open `localhost:5000` in your browser
* the mode includes ServiceWorker by default


## Dependencies

Main map constructor functions, API fetch inspired by tutorial:
https://www.youtube.com/watch?v=ywdxLNjhBYw 

Restaurants informations API from: foursquare.com https://foursquare.com

Map from https://www.google.pl/maps

Search function inspired by Udacity lessons.