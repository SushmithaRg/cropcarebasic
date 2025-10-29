# Weather Integration Setup

## OpenWeatherMap API Integration

The CropKart project now includes live weather data integration using the OpenWeatherMap API.

### Setup Instructions

1. **Get API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

2. **Configure Environment**
   - Open `.env` file in the project root
   - Replace `YOUR_API_KEY` with your actual API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
   ```

3. **Features**
   - **Auto-location detection**: Uses GPS to get user's current location
   - **Profile location fallback**: Uses user's profile location if GPS is denied
   - **Manual location search**: Users can search for any city manually
   - **Location refresh**: Button to refresh current location weather
   - **Real-time data**: Shows current temperature, humidity, wind speed, visibility
   - **Weather icons**: Displays actual weather condition icons from OpenWeatherMap
   - **Error handling**: Graceful fallbacks for API failures or permission denials

### API Endpoints Used

- Current Weather: `https://api.openweathermap.org/data/2.5/weather`
- Weather Icons: `https://openweathermap.org/img/wn/{icon}@2x.png`

### Data Displayed

- **City name**: `data.name`
- **Temperature**: `data.main.temp` (°C)
- **Humidity**: `data.main.humidity` (%)
- **Condition**: `data.weather[0].description`
- **Wind Speed**: `data.wind.speed` (converted to km/h)
- **Visibility**: `data.visibility` (km)
- **Feels Like**: `data.main.feels_like` (°C)

### Location Priority System

1. **GPS Location** (Primary): Uses device GPS for most accurate location
2. **User Profile Location** (Fallback): Checks user profile for location data in these fields:
   - `user.user_metadata.location`
   - `user.user_metadata.city`
   - `user.user_metadata.address`
   - `user.location`
   - `user.city`
3. **Manual Search**: Users can search for any city using the "Change Location" button
4. **Default Fallback**: Bangalore, India (if no profile location is found)

### Browser Permissions

The app will request location permission. If denied, it automatically falls back to the user's profile location or Bangalore as default.

### Mobile Friendly

The weather component is fully responsive and works on all device sizes while maintaining the CropKart theme consistency.
