# 

# **Outfit Coordinator based on Weather**

## **Overview**

This project is a JavaScript-based application that helps users coordinate their outfits according to the weather conditions of their location. It utilizes weather data from a weather API and suggests appropriate clothing items from a database based on the current weather.

## **Features**

- Fetches weather data from [Weather API](https://www.exampleweatherapi.com/) to determine the current conditions.
- Retrieves clothing suggestions from a clothing database based on the weather conditions.
- Allows users to input their location or automatically detects their location using geolocation API.

## **APIs Used**

- **Weather API:** The application uses the Weather API to fetch current weather data. You can sign up and obtain an API key.
    - Endpoints:
        - **`/weather`**: Retrieves current weather based on location.
        - **`/forecast`**: Fetches weather forecast for upcoming days.

## **Database**

- **Clothing Database:** The project uses a public clothing database to suggest suitable outfits based on weather conditions. The database includes clothing items tagged with weather attributes such as temperature ranges, precipitation, etc.
    - Schema:
        - **`id`**: Unique identifier for each clothing item.
        - **`name`**: Name of the clothing item.
        - **`type`**: Type/category of clothing (e.g., tops, bottoms, outerwear).
        - **`weather_condition`**: Weather conditions suitable for the item (e.g., hot, cold, rainy).
        - **`temperature_range`**: Range of temperatures suitable for the item.

## **Setup Instructions**

1. Clone the repository: **`git clone https://github.com/yourusername/outfit-coordinator.git`**
2. Navigate to the project directory: **`cd outfit-coordinator`**
3. Obtain API keys for the Weather API and configure them in the project settings.
4. Ensure the necessary dependencies are installed.
5. Run the application locally using a server or open **`index.html`** in a web browser.

## **Usage**

- Upon loading the application, users can either input their location or allow the application to access their geolocation.
- The application fetches the current weather and suggests appropriate clothing items.
- Users can view the recommended outfits and customize their selections if needed.

### **Weather APIs:**

1. **OpenWeatherMap:** Provides current weather data, forecasts, and historical weather data. It offers a free tier with limited requests per minute.
    - Website: [OpenWeatherMap](https://openweathermap.org/api)
2. **Weatherbit:** Offers various weather data, including forecasts, historical weather, and air quality indices. Provides a free tier with limited requests per day.
    - Website: [Weatherbit](https://www.weatherbit.io/api)
3. **AccuWeather:** Provides current conditions, forecasts, and severe weather alerts. Offers a limited free tier for developers.
    - Website: [AccuWeather API](https://developer.accuweather.com/apis)

### **Clothing Information Databases:**

1. **Open Apparel Registry (OAR):** A database of clothing brands and information on their factories, which can be useful for sustainability-focused clothing information.
    - Website: [Open Apparel Registry](https://openapparel.org/)
2. **Clothes by Colors:** A clothing database that categorizes clothing items by colors, styles, and types.
    - Website: [Clothes by Colors](https://clothesbycolors.com/)
3. **Wardrobe API:** Provides access to a database of clothing items categorized by types, styles, and seasons.
    - Website: [Wardrobe API](https://www.wardrobeapi.com/)

## **Future Improvements**

- Implement user profiles to save preferred outfits.
- Add additional APIs for more accurate weather forecasts.
- Enhance the UI/UX for a more interactive experience.
