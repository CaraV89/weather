// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// https://cdnjs.cloudflare.com/ajax/libs/sidr/2.2.1/jquery.sidr.min.js

// call Sidr Plugin. Toggle by Default
$('#sidr-show-hide').sidr({
	speed:500
});
	
// Close from inside
$('#close').sidr({
  method: 'toggle',
	timimg:'ease-out',
	speed:500
});

$('section').sidr({
	method: 'close',
	timimg:'ease-out',
	speed:500
});

navigator.geolocation.getCurrentPosition(function(position){
	var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
	var latAndLong = latitude + ',' + longitude; 
  console.log(latAndLong);
	return latAndLong;
});


// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo').show(); 

} else {
  
  $('.geo').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo').click( function() {
      
    //load weather using your lat/long coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
      
      // Check lat/long coordinates
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      
      console.log(lat, long);
      
      // Send to SimpleWeather
      getWeather( lat + ',' + long ); 
    });
   
});



// Show geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    unit: 'f',
    success: function(weather) {
      
      // Display Data
        $('#currentLocation .currently').text(weather.currently);
      $('#currentLocation .temp').text(weather.temp);
      $('#currentLocation .city').text(weather.city);
      $('#currentLocation img').attr('src', weather.image);
	   $('#currentLocation .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#currentLocation figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#currentLocation figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#currentLocation figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#currentLocation figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#currentLocation figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#currentLocation figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#currentLocation figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#currentLocation figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#currentLocation figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#currentLocation figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#currentLocation figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#currentLocation figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#currentLocation figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#currentLocation figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#currentLocation figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#currentLocation figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#currentLocation figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#currentLocation figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#currentLocation figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
    var currentLocationIconCode = 'icon-' + weather.code;
	  var currentLocationIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var currentLocationIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var currentLocationIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var currentLocationIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var currentLocationIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#currentLocation i:nth-child(1)').attr('class', currentLocationIconCode );
		$('#currentLocation .day1 i').attr('class', currentLocationIconCodeDay1);
		$('#currentLocation .day2 i').attr('class', currentLocationIconCodeDay2);
		$('#currentLocation .day3 i').attr('class', currentLocationIconCodeDay3);
		$('#currentLocation .day4 i').attr('class', currentLocationIconCodeDay4);
		$('#currentLocation .day5 i').attr('class', currentLocationIconCodeDay5);
	
		if (weather.code >= 0 && weather.code <= 8) {
          $('#currentLocation').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#currentLocation').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#currentLocation').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#currentLocation').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#currentLocation').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#currentLocation').addClass('bad');
          }

    },
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look Outside.');
    }
  
  });
    
}; 
	
	// Moses Lake
$.simpleWeather({
    location: 98837,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#moses .currently').text(weather.currently);
      $('#moses .temp').text(weather.temp);
      $('#moses .city').text(weather.city);
      $('#moses img').attr('src', weather.image);
	  $('#moses .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#moses figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#moses figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#moses figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#moses figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#moses figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#moses figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#moses figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#moses figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#moses figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#moses figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#moses figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#moses figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#moses figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#moses figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#moses figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#moses figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#moses figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#moses figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#moses figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var mosesIconCode = 'icon-' + weather.code;
	  var mosesIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var mosesIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var mosesIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var mosesIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var mosesIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#moses i:nth-child(1)').attr('class', mosesIconCode );
		$('#moses .day1 i').attr('class', mosesIconCodeDay1);
		$('#moses .day2 i').attr('class', mosesIconCodeDay2);
		$('#moses .day3 i').attr('class', mosesIconCodeDay3);
		$('#moses .day4 i').attr('class', mosesIconCodeDay4);
		$('#moses .day5 i').attr('class', mosesIconCodeDay5);
	
		if (weather.code >= 0 && weather.code <= 8) {
          $('#moses').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#moses').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#moses').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#moses').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#moses').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#moses').addClass('bad');
          }
      
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Cheney
$.simpleWeather({
    location: 99004,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);

      // Display Data
	  $('#cheney .currently').text(weather.currently);
      $('#cheney .temp').text(weather.temp);
      $('#cheney .city').text(weather.city);
      $('#cheney img').attr('src', weather.image);
	  $('#cheney .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#cheney figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#cheney figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#cheney figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#cheney figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#cheney figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#cheney figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#cheney figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#cheney figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#cheney figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#cheney figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#cheney figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#cheney figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#cheney figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#cheney figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#cheney figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#cheney figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#cheney figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#cheney figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#cheney figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var cheneyIconCode = 'icon-' + weather.code;
	  var cheneyIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var cheneyIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var cheneyIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var cheneyIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var cheneyIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#cheney i:nth-child(1)').attr('class', cheneyIconCode );
		$('#cheney .day1 i').attr('class', cheneyIconCodeDay1);
		$('#cheney .day2 i').attr('class', cheneyIconCodeDay2);
		$('#cheney .day3 i').attr('class', cheneyIconCodeDay3);
		$('#cheney .day4 i').attr('class', cheneyIconCodeDay4);
		$('#cheney .day5 i').attr('class', cheneyIconCodeDay5);
		
		if (weather.code >= 0 && weather.code <= 8) {
          $('#cheney').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#cheney').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#cheney').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#cheney').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#cheney').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#cheney').addClass('bad');
          }
	},
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

// Spokane
$.simpleWeather({
    location: 99201,
    unit: 'f',
    success: function(weather) {
      // Entire weather object
      console.log(weather);
      
      // Display Data
	  $('#spokane .currently').text(weather.currently);
      $('#spokane .temp').text(weather.temp);
      $('#spokane .city').text(weather.city);
      $('#spokane img').attr('src', weather.image);
	  $('#spokane .today').text(weather.forecast[0].day + ', ' + weather.forecast[0].date);
	
		// Display Data : Day 1
    $('#spokane figure:nth-child(1) .low').text(weather.forecast[0].low);
    $('#spokane figure:nth-child(1) .high').text(weather.forecast[0].high);
    $('#spokane figure:nth-child(1) img').attr('src', weather.forecast[0].image);
	
		// Display Data : Day 2
    $('#spokane figure:nth-child(2) .next-day').text(weather.forecast[1].day);
    $('#spokane figure:nth-child(2) .low').text(weather.forecast[1].low);
    $('#spokane figure:nth-child(2) .high').text(weather.forecast[1].high);
    $('#spokane figure:nth-child(2) img').attr('src', weather.forecast[1].image);
		
		// Display Data : Day 3
    $('#spokane figure:nth-child(3) .next-day').text(weather.forecast[2].day);
    $('#spokane figure:nth-child(3) .low').text(weather.forecast[2].low);
    $('#spokane figure:nth-child(3) .high').text(weather.forecast[2].high);
    $('#spokane figure:nth-child(3) img').attr('src', weather.forecast[2].image);
		
		// Display Data : Day 4
    $('#spokane figure:nth-child(4) .next-day').text(weather.forecast[3].day);
    $('#spokane figure:nth-child(4) .low').text(weather.forecast[3].low);
    $('#spokane figure:nth-child(4) .high').text(weather.forecast[3].high);
    $('#spokane figure:nth-child(4) img').attr('src', weather.forecast[3].image);

    // Display Data : Day 5
    $('#spokane figure:nth-child(5) .next-day').text(weather.forecast[4].day);
    $('#spokane figure:nth-child(5) .low').text(weather.forecast[4].low);
    $('#spokane figure:nth-child(5) .high').text(weather.forecast[4].high);
    $('#spokane figure:nth-child(5) img').attr('src', weather.forecast[4].image);

		// Change Icon w/ Condition code
      var spokaneIconCode = 'icon-' + weather.code;
	  var spokaneIconCodeDay1 = 'icon-' + weather.forecast[0].code;
	  var spokaneIconCodeDay2 = 'icon-' + weather.forecast[1].code;
	  var spokaneIconCodeDay3 = 'icon-' + weather.forecast[2].code;
	  var spokaneIconCodeDay4 = 'icon-' + weather.forecast[3].code;
	  var spokaneIconCodeDay5 = 'icon-' + weather.forecast[4].code;
      
		$('#spokane i:nth-child(1)').attr('class', spokaneIconCode );
		$('#spokane .day1 i').attr('class', spokaneIconCodeDay1);
		$('#spokane .day2 i').attr('class', spokaneIconCodeDay2);
		$('#spokane .day3 i').attr('class', spokaneIconCodeDay3);
		$('#spokane .day4 i').attr('class', spokaneIconCodeDay4);
		$('#spokane .day5 i').attr('class', spokaneIconCodeDay5);
		
		if (weather.code >= 0 && weather.code <= 8) {
          $('#spokane').addClass('bad');
          }
		if (weather.code >= 9 && weather.code <= 12) {
          $('#spokane').addClass('wet');
          }
		if (weather.code >= 13 && weather.code <= 19) {
          $('#spokane').addClass('snow');
          }
      if (weather.code >= 20 && weather.code <= 30) {
          $('#spokane').addClass('sad');
          }
      if (weather.code >= 31 && weather.code <= 36) {
		  $('#spokane').addClass('happy');
          }
		if (weather.code >= 37 && weather.code <= 47) {
		  $('#spokane').addClass('bad');
          }
	},
	
    error: function(error) {
      // Show if weather cannot be retreived
      console.log('Look outside.');
    }
  
  });

