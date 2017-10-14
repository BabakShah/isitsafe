$(document).ready(function() {




 $("#submit-input").on("click", function() {
 	$("#location").keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $("#submit-input").click();//Trigger search button click event
        }
    });


    });
 });


/*$.ajax({
    url: "https://data.cityofchicago.org/resource/6zsd-86xi.json",
    type: "GET",
    data: {
      "$limit" : 5000,
      "$$app_token" : "pyfrFl35spogEJeGI7iTphR2y"
    }
}).done(function(data) {
  //alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
});*/



// user inputs address


/*$(document).ready(function() {
  $('#submit-input').click(function() {
    //console.log($('#location').val());
    var userInputAddress = $("#location").val();
    //console.log(userInputAddress);
  });
});*/

// address gets converted to coordinates

/*var geocoder = new google.maps.Geocoder();
    //var address = jQuery('.location').val();
    //console.log(address)
    geocoder.geocode( { 'address': userInputAddress}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        console.log(longitude)
        console.log(latitude)
        //jQuery('.collection-item').val(latitude+', '+longitude);
        } 
    });

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
var queryURL = "https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=within_circle(location, " + longitude + "," latitude + ", 500)";
	console.log(queryURL);
*/

 
// crime api takes coordinates and gets all crimes within circle of user imputed address
// crime api returns location(needs to be converted to address), description, and date(convert date)
// google maps api takes coordinates and drops markers on map of crime locations
// show results on map and table



