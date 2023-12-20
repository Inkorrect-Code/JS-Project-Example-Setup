# Outfitter

## Overview
Outfitter is a JavaScript-based data visualization that assists in coordinating outfits based on the weather conditions of a desired location. Geolocation is used to default to the user's current location, and further allows input of any valid US zip code to choose a different location. From this point, a sex is specified and appropriate clothing categories will be available to select, allowing the user to pick specific clothing items of various styles from the list that appears.

## Instructions
Please enter a valid US zipcode into the search box to display the current weather conditions in that area.

Click on the sex to change it.

Click the clothing icons to show a list of that clothing category to select and try on items. Feel free to select any number of categories you prefer.

Now you have a custom outfit for today's weather!

## Wireframe
![alt text](https://gyazo.com/4f57cab0b36e94ccd98027ded55b7666)

## Features
- Fetches real-time weather data based on user's location or input.
- Suggests appropriate clothing categories based on the current weather.
- Fetches real clothing items for the user to pick for each desired clothing category.
- Allows users to switch between men's and women's clothing suggestions.

## Technologies, Libraries, and APIs:
- [The One Call API 3.0] [https://openweathermap.org/api/one-call-3] for real-time weather information.
- [HM - Hennes Mauritz API] [https://rapidapi.com/apidojo/api/hm-hennes-mauritz] for retrieving clothing items to select.
- Webpack to bundle and transpile the source Javascript code.

## Setup and Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all the dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and navigate to `http://localhost:8080/` (or the port number shown in your terminal).

## Usage
Enter your location or a US zip code in the search box and press Enter. The application will display the current weather conditions and suggest appropriate clothing items. You can switch between men's and women's clothing suggestions by clicking the toggle button.

## Future Improvements
- Add more clothing categories and options.
- Improve the user interface and experience.
- Add user accounts and save preferred outfits.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
