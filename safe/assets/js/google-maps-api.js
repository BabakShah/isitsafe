//$(document).ready(function() {
    var map;
	    function initMap() {
	    	var location = {lat: 41.881832, lng: -87.623177};
	    	map = new google.maps.Map(document.getElementById('map'), {
	        center: location,
	        zoom: 11
	    });
	    var marker = new google.maps.Marker({
	    	position: location,
	    	map: map
	    });
	}
//});
	
