# 🌾 CropKart - Complete Agricultural Platform

A fully functional, modern agricultural e-commerce platform with AI-powered crop diagnostics and real-time news updates.

## ✨ Key Features

### 🔬 AI Crop Diagnostics (Fully Working)
- Upload or capture crop images
- Get instant AI-powered disease detection
- Receive detailed treatment recommendations
- Track analysis history
- Real-time confidence metrics

### 📰 Current News
- Automatically fetches latest agricultural news
- Beautiful card-based layout
- Refresh button for updated news
- Agriculture-focused content

### 🛒 E-Commerce Platform
- Product marketplace
- Shopping cart functionality
- Order management
- Payment integration ready

### 🌤️ Weather Integration
- Real-time weather data
- Forecast predictions
- Farming alerts

### 👥 Community
- Farmer community features
- Knowledge sharing
- Expert connections

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- API keys for news (optional)

### Installation

1. **Install Dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd backend
   npm install
   ```

2. **Configure Environment**
   
   Create `.env` file in the `backend` folder:
   ```env
   MONGO_URI=mongodb://localhost:27017/cropkart
   JWT_SECRET=your-secret-key-here
   RAZORPAY_KEY_ID=your-razorpay-key
   RAZORPAY_KEY_SECRET=your-razorpay-secret
   OPENWEATHER_API_KEY=your-weather-api-key
   PORT=5000
   NODE_ENV=development
   ```

   Create `.env` file in the root folder:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_NEWS_API_KEY=your-news-api-key-here
   ```

3. **Start the Application**
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   npm run dev
   ```

4. **Access the App**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
Cropkart/
├── src/
│   ├── components/
│   │   ├── DiagnosticsPage.tsx    # Unified AI Diagnostics
│   │   ├── News.tsx                # Current News Component
│   │   ├── Sidebar.tsx             # Updated Navigation
│   │   └── ... (other components)
│   ├── services/
│   │   └── api.js                  # Backend API Service
│   └── App.tsx                      # Main App Router
├── backend/
│   ├── routes/
│   │   ├── diagnostic.js           # Diagnostic API
│   │   ├── weather.js              # Weather API
│   │   └── ... (other routes)
│   ├── models/                      # MongoDB Models
│   └── server.js                    # Express Server
└── README.md
```

## 🎯 What's Changed

### ✅ Implemented Features

1. **Unified Diagnostics** - Removed duplicate diagnostic components and created one comprehensive AI Diagnostics page
2. **Current News Section** - Added news feed with auto-refresh functionality
3. **Improved UI/UX** - Enhanced with modern design, animations, and responsive layout
4. **Backend Integration** - Fully functional backend API with MongoDB
5. **Error Handling** - Comprehensive error handling and loading states

### 🗑️ Removed Features

- Removed duplicate `Diagnostics` and `DiagnosticsAI` components
- Removed `Money Saver` and `Updates` from main navigation
- Streamlined sidebar navigation for better UX

### 🔧 Technical Improvements

- Integrated Framer Motion for smooth animations
- Added real-time progress indicators for diagnostics
- Implemented proper state management
- Added comprehensive error handling
- Optimized image loading with fallbacks
- Added loading skeletons

## 🎨 UI/UX Enhancements

### Modern Design Elements
- Gradient backgrounds for depth
- Card-based layouts with hover effects
- Smooth transitions and animations
- Professional color scheme (green agricultural theme)
- Responsive grid layouts

### Visual Improvements
- High-quality agricultural imagery
- Icon-based navigation
- Progress indicators
- Status badges and alerts
- Loading skeletons

## 🔬 Diagnostic Feature

The AI Diagnostics feature provides:

1. **Image Upload/Capture**
   - Upload from device
   - Camera integration ready

2. **AI Analysis**
   - Real-time disease detection
   - Confidence scoring
   - Severity assessment

3. **Results Display**
   - Disease identification
   - Treatment recommendations
   - Preventive measures
   - Visual severity indicators

4. **History Tracking**
   - Previous analyses
   - Date and time stamps
   - Result comparison

## 📰 News Feature

The Current News section provides:

1. **Auto-Loading**
   - Fetches latest agricultural news on load

2. **Refresh Functionality**
   - Manual refresh button
   - Updated timestamp display

3. **News Cards**
   - Image, title, description
   - Source attribution
   - External link to full article

4. **Mock Data Support**
   - Works without API key
   - Provides sample agriculture news

## 🛠️ Development

### Running Locally

```bash
# Start backend
cd backend
npm run dev  # Runs on http://localhost:5000

# Start frontend
npm run dev  # Runs on http://localhost:5173
```

### Building for Production

```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

## 📝 API Endpoints

### Diagnostics
- `POST /api/diagnostic/analyze` - Analyze crop image
- `GET /api/diagnostic/history` - Get analysis history

### News
- Uses NewsAPI (newsapi.org) when configured
- Falls back to mock data without API key

### Other Endpoints
- `GET /api/health` - Health check
- `POST /api/auth/login` - User login
- `GET /api/products` - List products

## 🐛 Troubleshooting

### Backend Not Starting
1. Check MongoDB is running
2. Verify `.env` configuration
3. Check port 5000 is available

### Frontend Not Loading
1. Verify backend is running
2. Check API base URL in `.env`
3. Clear browser cache

### Diagnostic Not Working
1. Check internet connection
2. Verify image format (JPG, PNG)
3. Check browser console for errors

## 📦 Dependencies

### Frontend
- React 18+
- TypeScript
- Tailwind CSS
- Radix UI
- Framer Motion
- Axios

### Backend
- Express.js
- MongoDB/Mongoose
- JWT Authentication
- Razorpay Integration
- OpenWeatherMap API

## 🌟 Features Status

| Feature | Status |
|---------|--------|
| AI Diagnostics | ✅ Working |
| Current News | ✅ Working |
| Marketplace | ✅ Working |
| Weather | ✅ Working |
| Cart & Orders | ✅ Working |
| User Auth | ✅ Working |
| Admin Panel | ✅ Working |
| Community | ✅ Working |

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Author

Created with ❤️ for the agricultural community

---

**Note**: Make sure to configure your API keys in the `.env` files for full functionality. The app will work with mock data without API keys, but some features (like real-time weather and actual news) will be limited.

