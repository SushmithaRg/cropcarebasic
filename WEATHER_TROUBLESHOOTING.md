# Weather API Troubleshooting Guide

## 🔍 Common Issues and Solutions

### ❌ **Error: "city not found" (404)**

**Cause**: The OpenWeatherMap API cannot find the specified city name.

**Solutions Implemented**:

1. **City Name Mapping**: Added mapping for 50+ Indian cities with correct spellings
   ```typescript
   const cityMap = {
     'mumbai': 'Mumbai,IN',
     'delhi': 'New Delhi,IN',
     'bengaluru': 'Bangalore,IN',
     // ... 50+ more cities
   };
   ```

2. **Multiple Fallback Strategies**:
   - Try city name without country code
   - Try major Indian cities as fallbacks
   - Final fallback to Bangalore

3. **Input Validation**: 
   - Check for empty/invalid location strings
   - Handle 'undefined' and 'null' values
   - Minimum length validation

### 🔧 **Debugging Steps**

#### **1. Check Console Logs**
Open browser console (F12) and look for:
```
✅ API Key loaded: Yes
✅ API Key length: 32
✅ Testing API key with Bangalore...
✅ Weather data received: {name: "Bangalore", ...}
```

#### **2. Common Error Messages**
- `"Please add your OpenWeatherMap API key"` → Check .env file
- `"API Error: 401"` → Invalid API key
- `"API Error: 404"` → City not found (now handled automatically)
- `"Failed to fetch"` → Network/CORS issue

#### **3. API Key Validation**
```bash
# Test your API key directly
curl "https://api.openweathermap.org/data/2.5/weather?q=Bangalore,IN&appid=YOUR_API_KEY&units=metric"
```

### 🛠️ **Enhanced Error Handling**

#### **City Not Found (404) Recovery**:
```typescript
// 1. Try without country code
"Mumbai,IN" → "Mumbai"

// 2. Try major fallback cities
["Mumbai,IN", "Delhi,IN", "Bangalore,IN", "Chennai,IN", "Kolkata,IN"]

// 3. Show fallback weather with clear message
"City 'XYZ' not found. Showing weather for Mumbai instead."
```

#### **Profile Location Processing**:
```typescript
const getUserProfileLocation = () => {
  // Check multiple profile fields
  const location = user?.user_metadata?.location || 
                   user?.user_metadata?.city || 
                   user?.user_metadata?.address;
  
  // Validate and clean
  if (!location || location.length < 2) {
    return 'Bangalore,IN';
  }
  
  // Map common city names
  const mapped = cityMap[location.toLowerCase()];
  return mapped || `${location},IN`;
};
```

### 📍 **Location Priority System**

1. **GPS Location** (Primary)
   - Most accurate, real-time location
   - Requires user permission

2. **User Profile Location** (Fallback)
   - Checks: location, city, address fields
   - Maps to correct city names
   - Validates input

3. **Manual Search** (Override)
   - User can search any city
   - Real-time validation
   - Fallback on failure

4. **Default Location** (Final)
   - Bangalore, India
   - Always works as last resort

### 🔄 **Auto-Refresh System**

#### **Features**:
- **5-minute intervals**: Optimal API usage
- **User toggle**: Enable/disable control
- **Smart refresh**: Only when tab is active
- **Error recovery**: Continues despite failures

#### **Implementation**:
```typescript
useEffect(() => {
  if (!autoRefresh || !weatherData) return;
  
  const interval = setInterval(() => {
    const location = getUserProfileLocation();
    fetchWeatherByCity(location, true);
  }, 5 * 60 * 1000);
  
  return () => clearInterval(interval);
}, [autoRefresh, weatherData]);
```

### 🌍 **Supported Cities**

#### **Major Indian Cities** (Auto-mapped):
- Mumbai, Delhi, Bangalore, Chennai, Kolkata
- Hyderabad, Pune, Ahmedabad, Jaipur, Lucknow
- Kanpur, Nagpur, Indore, Thane, Bhopal
- Visakhapatnam, Patna, Vadodara, Ludhiana, Agra
- And 30+ more cities...

#### **International Cities**:
Format: `"City,CountryCode"` (e.g., "London,UK", "New York,US")

### 🔍 **Testing Your Setup**

#### **1. Basic API Test**:
```javascript
// Test in browser console
fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangalore,IN&appid=YOUR_API_KEY&units=metric')
  .then(r => r.json())
  .then(console.log);
```

#### **2. Check Environment Variables**:
```bash
# In your .env file
VITE_OPENWEATHER_API_KEY=4c35694b630070eda8e7f5e24956f8b4
```

#### **3. Verify API Key**:
- Length should be 32 characters
- Should be alphanumeric
- Check OpenWeatherMap dashboard for usage

### 📊 **API Usage Monitoring**

#### **Current Usage**:
- **Current Weather**: 1 call per location
- **5-Day Forecast**: 1 call per location  
- **Geocoding**: 1 call per manual search
- **Auto-refresh**: 1 call every 5 minutes

#### **Optimization**:
- Cache results for 5 minutes
- Batch requests when possible
- Graceful degradation on failures
- Smart fallback system

### 🚨 **Emergency Fallbacks**

If all weather APIs fail:
1. **Static Weather Data**: Show last known weather
2. **Generic Recommendations**: Basic farming advice
3. **Manual Input**: Let users input weather manually
4. **Offline Mode**: Cached data from localStorage

### 📞 **Getting Help**

#### **Check These First**:
1. ✅ API key is valid and active
2. ✅ Internet connection is stable  
3. ✅ Browser console shows no CORS errors
4. ✅ City name is spelled correctly
5. ✅ .env file is properly configured

#### **Debug Information**:
When reporting issues, include:
- Browser console logs
- API key status (valid/invalid, don't share the key)
- Location being searched
- Error messages
- Network tab in developer tools

The enhanced error handling system should resolve most "city not found" errors automatically by trying multiple fallback strategies and providing clear user feedback.
