var map;

//renders the google map
function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), 
        {
            center: {lat: 41.881832, lng: -87.623177},
            zoom: 11
        }
    );
}
// initialize array of markers that will be used to clear markers from the map
var crimeMarkers = [];
//function that adds marker to the map where the crime was commited, takes longitude, latitude
function addMarker(lat,lng){
    
    marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat,lng),
            map: map
        }
    );
    crimeMarkers.push(marker);
}

// Removes the markers from the map,
function clearOverlays() {
  for (var i = 0; i < crimeMarkers.length; i++ ) {
    crimeMarkers[i].setMap(null);
  }
  crimeMarkers.length = 0;
}
//a function to clear the markers, does this by removing references to them
/*
function deleteMarkers() {
    clearMarkers();
    crimeMarkers = [];
}*/

//add marker for the address that the user inputs
