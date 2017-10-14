var map;

//intiallize the map
function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), 
        {
            center: {lat: 41.881832, lng: -87.623177},
            zoom: 11
        }
    );
}

//adds marker to the map where the crime was commited, takes longitude, latitude
function addMarker(lat,lng){
    var marker;
    marker = new google.maps.Marker({
            position: new google.maps.LatLng(lat,lng),
            map: map
        }
    );
}