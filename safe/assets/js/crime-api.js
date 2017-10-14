

	// add scrolling to anchors
$(".animate").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
		var hash = this.hash;

		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 500, function(){

		// Add hash (#) to URL when done scrolling (default click behavior)
		//window.location.hash = hash;
		});
	}
});



// grabs user input from location search 
$("#submit-input").click(function() {
	 	$("#location").keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $("#submit-input").click();//Trigger search button click event
    }
});



	
var address = $("#location").val();
console.log(address);
var geocoder= new google.maps.Geocoder();
// converts user submitted address to longitude and latitude coordinates
geocoder.geocode( { "address": address}, function(results, status) {

	if (status == google.maps.GeocoderStatus.OK) {

		latitude = results[0].geometry.location.lat();
		longitude = results[0].geometry.location.lng();
		console.log(longitude)
		console.log(latitude)
//jQuery('.collection-item').val(latitude+', '+longitude);
} 


var queryURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=within_circle(location," + latitude + ", " + longitude + ", 50)";
console.log(queryURL);


var results;
      // Performing an AJAX request with the queryURL
$.ajax({
    url: queryURL,
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "pyfrFl35spogEJeGI7iTphR2y",
    }
})
// After data comes back from the request
	.done(function(response) {
		console.log(queryURL);

	 	console.log(response);
	  	// storing the data from the AJAX request in the results variable
	  	results = response;

	  	//adding the markers for each crime to the map
	  	for(var i = 0; i < results.length; i++){
	  		var latitude = results[i].latitude;
	  		var longitude = results[i].longitude;
	  		console.log(i);
	  		console.log("longitude" + longitude);
	  		console.log("latitude" + latitude);
	  		addMarker(latitude, longitude);
  		}
	});



	}); //

}); //on click end
