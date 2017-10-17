$(document).ready(function(){
	 // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDz4cNlkfWQVwV4sJBXgIOtITjeKexIjy0",
      authDomain: "isitsafe-4ce15.firebaseapp.com",
      databaseURL: "https://isitsafe-4ce15.firebaseio.com",
      projectId: "isitsafe-4ce15",
      storageBucket: "isitsafe-4ce15.appspot.com",
      messagingSenderId: "366399254426"
    };
    firebase.initializeApp(config);

    var dataRef = firebase.database();

    // Initial Values
    var address = "";

	// add scrolling to anchors
	$(".animate").on('click', function(event) {

      address = $("#location").val();

      // Code for the push
      dataRef.ref().push({

        address: address,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
          $("#address-list").empty();
          queryFirebase();


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

	function queryFirebase() {var query = dataRef.ref().orderByChild('dateAdded').limitToLast(3);
      query.on("child_added", function(snapshot) {
      var address = snapshot.val();
              //$("#address-list").append("<div class='well'><span id='address-list'> " + snapshot.val().address);
             $("#address-list").append("<a href='#!' class='collection-item'>" + snapshot.val().address + "</a>'");
                 });
    }

    queryFirebase();


	//initiallize geocoder
	var geocoder = new google.maps.Geocoder();

	// grabs user input from location search 
	$("#submit-input").click(function() {

		$("#location").keypress(function(e){
			if(e.which == 13){//Enter key pressed
	    		$("#submit-input").click();//Trigger search button click event
	 		}
		});


		//clear the markers on map before getting new data
		clearOverlays();

		//getting the address from the input box
		var address = $("#location").val();

		console.log(address);
		
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
		 	  		//get latitude and longitude from data
		 	  		var latitude = results[i].latitude;
		 	  		var longitude = results[i].longitude;
		 	  		console.log(i);
		 	  		console.log("longitude" + longitude);
		 	  		console.log("latitude" + latitude);
		 	  		//use addMarker function from the google-map-api js file
		 	  		addMarker(latitude, longitude);
		   		}
		   		//adding the information to the table at the bottom of the website
		   		for (var i = 0; i < results.length; i++) {
		   			console.log("HI"+i);
					var block = results[i].block;
					console.log(block);			
					var description = results[i].description;
					console.log("Description: " + description);
					var date = results[i].date;
					console.log("Date:" + date);          

		              

		       // Chaining several jQuery methods to achieve the following:
					var firstRowTds = $("response") // Get a reference to the table as a jQuery object
					.children() // Get all of table's immediate children as an array
					.eq(1) // Get element at the first index of this returned array (the <tbody>)
					.children("tr") // Get an array of all <tr> children inside the returned <tbody>
					.eq(0) // Get the 0th child of this returned array (the first <tr>)
					.children("td"); // Get an array of all <td> children inside the returned <tr>

					// Setting the inner text of each <td> in the firstRowTds array
					firstRowTds.eq(0).text(description);

					firstRowTds.eq(1).text(response.block);

					firstRowTds.eq(2).text(response.date);
		 		}
		 		
	 		});  //end .done function

		});//end of geocode function?? for some reason all of the code regarding the api has to be inside here
    
	}); //on click end


	//this enables the Google Map API Autocomplete function for addresses
	var autocomplete = new google.maps.places.Autocomplete((document.getElementById('location')),
    {
    	types: ['geocode']
    });
});