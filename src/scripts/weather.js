import OutfitRenderer from "./outfit"

class WeatherRenderer {
  constructor() {
    this.initEventListeners()
    this.outfitRenderer = new OutfitRenderer()
    this.getWeatherData()
  }

  initEventListeners() {
    document.getElementById('weather-input').addEventListener('keyup', (event) => {
      if (event.code === 'Enter') { // listens for event code for 'enter' key
        const zipCode = event.target.value // cannot do this for button you make later 
        if (this.isValidZipCode(zipCode))
          this.getWeatherData(zipCode)
      } 
    })
    document.getElementById('search-button').addEventListener('click', () => {
      const zipCode = document.getElementById('weather-input').value
      if (this.isValidZipCode(zipCode))
        this.getWeatherData(zipCode)
    })
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
        // dozi bad
        this.displayWeatherData(weatherData)

        const categories = this.getCategories(weatherData)
        this.outfitRenderer.displayCategories(categories)
        console.log(categories)
      })
      .catch(error => console.error('Error:', error));
  }

  displayWeatherData(weatherData) {
    console.log(weatherData)
    // DOM manipulation stuff
    document.getElementById('temperature-icon').src = weatherData.main.temp > 60 ? '/assets/images/clear.png' : '/assets/images/mist.png'

    document.getElementById('temperature-text').innerText = `${Math.round(weatherData.main.temp)}°F` // no '?' here means error will be thrown

    document.getElementById('location-text').innerText = weatherData.name

    document.getElementById('min-temperature-text').innerHTML = `<div>Low</div><div>${Math.round(weatherData.main.temp_min)}°F</div>`
    document.getElementById('max-temperature-text').innerHTML = `<div>High</div><div>${Math.round(weatherData.main.temp_max)}°F</div>`
  }

  getCategories(weatherData) { // takes in whole weather api call
    
    const mensCategories = [];
    const womensCategories = [];

    // add to clothing categories based on temp ranges ==> connects weather to clothes
    const temperature = weatherData.main.temp;

    if (temperature <= 40) { // important that this is not an array ==> output later is arr
      // TODO: add dresses and skirts
      mensCategories.push('men_jacketscoats', 'men_hoodiessweatshirts', 'men_shirts', 'men_trousers', 'men_jeans')
      womensCategories.push('ladies_jacketscoats', 'ladies_hoodiessweatshirts', 'ladies_trousers', 'ladies_jeans')

    } else if (temperature > 40 && temperature <= 60) {
      mensCategories.push('men_cardigansjumpers', 'men_hoodiessweatshirts', 'men_shirts', 'men_trousers', 'men_jeans')
      womensCategories.push('ladies_cardigansjumpers', 'ladies_hoodiessweatshirts', 'ladies_tops', 'ladies_shirtsblouses', 'ladies_trousers', 'ladies_jeans', 'ladies_dresses')

    } else if (temperature > 60 && temperature <= 70) {
      mensCategories.push('men_shirts', 'men_tshirtstanks', 'men_shorts', 'men_trousers', 'men_jeans')
      womensCategories.push('ladies_tops', 'ladies_shirtsblouses', 'ladies_trousers', 'ladies_jeans', 'ladies_skirts', 'ladies_dresses')

    } else {
      mensCategories.push('men_tshirtstanks', 'men_shorts')
      womensCategories.push('ladies_tops', 'ladies_shirtsblouses', 'ladies_skirts', 'ladies_shorts', 'ladies_dresses')

    }
    return {men: mensCategories, women: womensCategories};
  }

  isValidZipCode(zipCode) {
    return zipCode?.length == 5 && /^\d+$/.test(zipCode)
  }
}
//end of class
export default WeatherRenderer;
