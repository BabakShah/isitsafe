//$(document).ready(function() {
    

    //location = $("#location").val();


	var map;
    var loc;


	$('#submit-button').on("click",function(event) {
		event.preventDefault();
		console.log($('#location').val());
		loc = $("#location").val();
		var locationArray = loc.split(',');
		lat = parseInt(locationArray[0]);
		lng = parseInt(locationArray[1]);
		console.log(locationArray);
		console.log(loc);
	});


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
	/*
	var marker = new google.maps.Marker({
		position: location,
		map: map
	});*/


	}

	


//});
	
