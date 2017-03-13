// Get the Weather
$.simpleWeather({
  location: 99004,
  unit: 'f',
  success: function(weather){
    
    // Weather Check
    console.log(weather);
    
    // Display Weather
    $('.city').text(weather.city);
    $('.state').text(weather.region);
    $('.temp').text(weather.temp);
    $('.thumb img').attr('src', weather.image);
    
  },
  error: function(error){
    console.log('No Weather Found');
  }
});
