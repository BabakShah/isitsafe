

//intialize the longitude and latitude 
var latitude = 0;
var longitude = 0;
var map;

//intiallize the map
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.881832, lng: -87.623177},
    zoom: 11
});





$("document").ready(function(){

	//when the button is clicked 
	$("#submit-button").on("click", function() {
	    var geocoder = new google.maps.Geocoder();
	    var address = $('#location').val();
    	console.log(address)


    	//the geocoder method which is used to convert adress to long and lat
	    geocoder.geocode( { 'address': address}, function(results, status) {
		    if (status == google.maps.GeocoderStatus.OK) {
		    	//returns the latitude and longitude of the address
		        latitude = results[0].geometry.location.lat();
		        longitude = results[0].geometry.location.lng();
		        
		        console.log(latitude)
		        console.log(longitude)
		        map.setCenter({lat: latitude, lng: longitude});



	    	} 
		});
	});
});








/*
var marker = new google.maps.Marker({
	position: location,
	map: map
});*/


}

	


//});
	
