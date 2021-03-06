// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Create a red circle over Dallas
L.circle([32.779167, -96.808891], {
  color: "red",
  fillColor: "red",
  fillOpacity: 0.75,
  radius: 100000
}).addTo(myMap);

// Connect a black line from NYC to Toronto
var line = [
  [40.730610, -73.935242],
  [43.651070, -79.347015]
];
L.polyline(line, {
  color: "pink"
}).addTo(myMap);

// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
L.polygon([
  [33.753746, -84.386330],
  [32.076176, -81.088371],
  [30.332184, -81.655647],
  [32.361668, -86.279167]
], {
  color: "purple",
  fillColor: "purple",
  fillOpacity: 0.75
}).addTo(myMap);