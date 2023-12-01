const map = L.map("map").setView(
  [
    45.50711695950278, // latitude
    -73.52923853889997,
  ], // longitude
  12); // zoom
L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
  maxZoom: 15,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
  attribution: "Copyright Google Maps",
}).addTo(map);
var marker = L.marker([45.49770965333681, -73.57570208779725]).addTo(map); // Favourite store
var circle = L.circle([45.455430681840156, -73.56970618779941], {
  // My area
  radius: 600,
}).addTo(map);
var polygonCoordinates = [
  [45.51270697346673, -73.40647099255555], // YUL5 My WareHouse
  [45.49052783161464, -73.43109992606647], // My favourite restaurant
  [45.52477245110723, -73.52183314188152], // My bus station
]; // My work area
var polygonOptions = {
  color: "red",
  fillOpacity: 0.8,
  weight: 6,
};
var polygon = L.polygon(polygonCoordinates, polygonOptions).addTo(map);
var popup = L.popup().setLatLng([43.1123, -79.01]).setContent("Testing a popup.").openOn(map);
marker.bindPopup("My Comfort Store").openPopup(); // modified the code to reflect my fav store
circle.bindPopup("<b>Testing!</b>Verdun Area."); // modified to show my living area
polygon.bindPopup("Testing! My work area."); // My work routine
var coordinates = [marker.getLatLng(), circle.getLatLng(), polygon.getBounds().getCenter()];
var currentIndex = 0;

function zoomToArea() {
  if(currentIndex >= coordinates.length) {
    currentIndex = 0; // Start over if reached the end
  }
  map.setView(coordinates[currentIndex], 12);
  currentIndex++;
}
/* The code for the map was respected tho modified to represent key points for me in the area of Montreal, my favourite shop, my neighbourhood and my work area. Another nice JS code added was the zoomToArea function to be able to view with ease the marker, circle and polygon*/