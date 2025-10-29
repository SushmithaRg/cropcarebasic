# CropKart - Full Stack E-commerce Platform

A comprehensive agricultural e-commerce platform built with React, Node.js, Express.js, and MongoDB. CropKart connects farmers, buyers, and agricultural suppliers in a digital marketplace.

## 🌟 Features

### For Farmers
- **Product Management**: List and manage agricultural products
- **Crop Diagnostics**: AI-powered crop health analysis with recommendations
- **Weather Integration**: Real-time weather data and farming alerts
- **Order Management**: Track and fulfill orders
- **Analytics**: Sales and performance insights

### For Buyers
- **Product Discovery**: Browse and search agricultural products
- **Smart Cart**: Add to cart with stock validation
- **Secure Payments**: Razorpay integration for safe transactions
- **Order Tracking**: Real-time order status updates
- **Product Reviews**: Rate and review products

### For Admins
- **Dashboard**: Comprehensive analytics and statistics
- **User Management**: Manage farmers, buyers, and their accounts
- **Product Moderation**: Approve, edit, or remove products
- **Order Management**: Oversee all transactions
- **System Health**: Monitor platform performance

## 🏗️ Architecture

### Backend (Node.js + Express.js)
- **RESTful API** with comprehensive endpoints
- **JWT Authentication** for secure user sessions
- **MongoDB** with Mongoose for data persistence
- **Razorpay Integration** for payment processing
- **OpenWeatherMap API** for weather data
- **Mock AI Diagnostic** system for crop analysis

### Frontend (React + Vite)
- **Modern React** with TypeScript
- **Tailwind CSS** for responsive design
- **Radix UI** components for accessibility
- **Axios** for API communication
- **Context API** for state management

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd cropkart-ecommerce-project
```

### 2. Run Setup Script
```bash
# Windows
setup-project.bat

# Or manually:
cd backend && npm install
cd .. && npm install
```

### 3. Configure Environment
```bash
cd backend
copy env.example .env
```

Edit `.env` with your configuration:
```env
MONGO_URI=mongodb://localhost:27017/cropkart
JWT_SECRET=your-super-secret-jwt-key
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
OPENWEATHER_API_KEY=your_openweather_api_key
PORT=5000
```

### 4. Start the Application
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
npm run dev
```

### 5. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **API Health**: http://localhost:5000/api/health

## 📁 Project Structure

```
cropkart-ecommerce-project/
├── backend/                 # Node.js Backend
│   ├── models/             # MongoDB Models
│   ├── routes/             # API Routes
│   ├── middleware/         # Auth & Validation
│   ├── server.js           # Main server file
│   └── package.json
├── src/                    # React Frontend
│   ├── components/         # React Components
│   ├── services/           # API Services
│   ├── contexts/           # React Contexts
│   ├── hooks/              # Custom Hooks
│   └── utils/              # Utility Functions
├── setup-project.bat       # Setup Script
└── README-FULLSTACK.md     # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile

### Products
- `GET /api/products` - List products (with filters)
- `POST /api/products` - Create product
- `GET /api/products/:id` - Get product details
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Cart & Orders
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add to cart
- `POST /api/orders/create` - Create order
- `POST /api/orders/verify-payment` - Verify payment

### Weather & Diagnostics
- `GET /api/weather/current` - Current weather
- `GET /api/weather/forecast` - Weather forecast
- `POST /api/diagnostic/analyze` - Analyze crop image

### Admin
- `GET /api/admin/dashboard` - Admin dashboard
- `GET /api/admin/users` - Manage users
- `GET /api/admin/products` - Manage products

## 🔑 Getting API Keys

### OpenWeatherMap API
1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for free account
3. Get API key from dashboard

### Razorpay Test Keys
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Create test account
3. Get test keys from API Keys section

## 🗄️ Database Schema

### Users
- Personal info, role (farmer/buyer/admin)
- Contact details and preferences
- Authentication data

### Products
- Product details, pricing, inventory
- Seller information and reviews
- Categories and specifications

### Orders
- Order items and pricing
- Shipping and payment details
- Status tracking and history

### Cart
- User cart with items
- Quantities and pricing
- Validation and totals

## 🎨 Frontend Components

### Core Components
- **LandingPage**: Welcome and feature showcase
- **AuthPage**: Login and registration
- **Dashboard**: User dashboard with stats
- **Market**: Product browsing and search
- **Cart**: Shopping cart management
- **Orders**: Order history and tracking
- **Diagnostics**: Crop analysis tool
- **Weather**: Weather data and alerts
- **Profile**: User profile management

### UI Components
- Built with Radix UI primitives
- Tailwind CSS for styling
- Responsive design
- Dark/light theme support

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Rate limiting
- Input validation
- SQL injection prevention

## 📊 Admin Features

### Dashboard Analytics
- Total users, products, orders
- Revenue and growth metrics
- User distribution charts
- Top-selling products

### Management Tools
- User role management
- Product approval/moderation
- Order status updates
- System health monitoring

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
npm test
```

## 🚀 Deployment

### Backend Deployment
1. Set production environment variables
2. Use production MongoDB instance
3. Deploy to Heroku, Railway, or VPS
4. Configure domain and SSL

### Frontend Deployment
1. Build production bundle
2. Deploy to Vercel, Netlify, or VPS
3. Configure API endpoints
4. Set up environment variables

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string

2. **CORS Errors**
   - Verify frontend URL in backend CORS config
   - Check API base URL in frontend

3. **Authentication Issues**
   - Check JWT secret configuration
   - Verify token storage

4. **Payment Errors**
   - Verify Razorpay test keys
   - Check payment flow

### Getting Help

- Check console logs for errors
- Review API documentation
- Check network requests in browser dev tools
- Ensure all environment variables are set

## 🎯 Roadmap

- [ ] Real AI integration for crop diagnostics
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Advanced search filters
- [ ] Product recommendations
- [ ] Social features and reviews

---

**Built with ❤️ for the agricultural community**
