class WeatherRenderer {
  constructor(elem) {
    this.elem = elem;
    this.getWeatherData()
  }


  // if geo doesnt populate, have user input zip code 
  getWeatherData(zipCode = undefined) { 
    if (!zipCode) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.getWeatherDataFromAPI( {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          })
        });
      } else {
        console.error('Geolocation is not supported by this browser.'); // this shows up as red bc error
      }
    
      
    } else {
      this.getWeatherDataFromAPI( { // input the required params for API call from clothing site
        zipCode: zipCode,
        countryCode: 'us' // hard coded
      })
    }
  }

  getWeatherDataFromAPI(locationData) { // locationData is obj that has either zipCode OR lat/long
    const apiKey = '5a5417f25c205e05f2bbfd938f406cb4'; // replace with actual API key ==> usually dont have the real key here but ehhhh
    let url = `http://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;
    if (locationData.lat !== undefined && locationData.lon !== undefined) url += `&lat=${locationData.lat}&lon=${locationData.lon}`
    else url += `&zip=${locationData.zipCode},${locationData.countryCode}`

    fetch(url)
      .then(response => response.json())
      .then(weatherData => { 

        this.displayWeatherData(weatherData)
        
        const categories = this.getCategories(weatherData)
        // TODO: send to ClothingRenderer to manage/load api data from H&M and display 
        console.log(categories)
      })
      .catch(error => console.error('Error:', error));
  }

  displayWeatherData(weatherData) {
    console.log(weatherData)
    // DOM manipulation stuff

    document.getElementById('temperature-icon').src = weatherData.main.temp > 60 ? './src/images/clear.png' : './src/images/snow.png'

    document.getElementById('temperature-text').innerText = `${Math.round(weatherData.main.temp)}°F` // no '?' here means error will be thrown

    document.getElementById('location-text').innerText = weatherData.name

    document.getElementById('min-temperature-text').innerHTML = `<div>Low</div><div>${Math.round(weatherData.main.temp_min)}°F</div>`
    document.getElementById('max-temperature-text').innerHTML = `<div>High</div><div>${Math.round(weatherData.main.temp_max)}°F</div>`
  }

  getCategories(weatherData) { // takes in whole weather api call
    const categories = []; // pushing in
    
    // add to clothing categories based on temp ranges ==> connects weather to clothes
    const temperature = weatherData.main.temp;

    if (temperature <= 50) {
      categories.push(['men_jacketscoats', 'men_hoodiessweatshirts', 'men_trousers', 'men_jeans'])
    } else if (temperature > 50 && temperature <= 60) {
      categories.push(['men_cardigansjumpers', 'men_hoodiessweatshirts', 'men_trousers', 'men_jeans'])
    } else if (temperature > 60 && temperature <= 70) {
      categories.push(['men_shirts', 'men_tshirtstanks', 'men_shorts', 'men_trousers', 'men_jeans'])
    } else {
      categories.push(['men_tshirtstanks', 'men_shorts'])
    }
    return categories;
  }
}
//end of class
export default WeatherRenderer;
