// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// City markers
var marker = L.marker([40.730610, -73.935242],{
  draggable: true,
  title: "New York"
}).addTo(myMap);
marker.bindPopup("new york");
var marker = L.marker([41.881832, -87.623177],{
  draggable: true,
  title: "chicago"
}).addTo(myMap);
marker.bindPopup("chicago");
var marker = L.marker([29.749907, -95.358421],{
  draggable: true,
  title: "houston"
}).addTo(myMap);
marker.bindPopup("houston");
var cities=[{
  {
    location:[40.730610, -73.935242],
    name:"New York",
    population:

  },
    location:[],
    name:"chicago",
    population:
  {

  },
  {

  },
  {

  }
]
// Add code to create a marker for each city below and add it to the map

// newyork;
// chicago;
// houston;
// la;
// omaha;
