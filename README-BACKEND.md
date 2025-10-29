# CropKart Backend Setup

This guide will help you set up the CropKart backend locally with Node.js, Express.js, and MongoDB.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

## Quick Setup

1. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Configure Environment Variables**
   ```bash
   copy env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   # Database
   MONGO_URI=mongodb://localhost:27017/cropkart
   
   # JWT
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   
   # Razorpay (Test Mode)
   RAZORPAY_KEY_ID=rzp_test_your_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   
   # OpenWeatherMap API
   OPENWEATHER_API_KEY=your_openweather_api_key
   
   # Server
   PORT=5000
   NODE_ENV=development
   ```

3. **Start MongoDB**
   - Local: Make sure MongoDB is running on your system
   - Atlas: Use your MongoDB Atlas connection string

4. **Start the Backend Server**
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (farmer/admin)
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `POST /api/products/:id/reviews` - Add product review

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart

### Orders
- `POST /api/orders/create` - Create new order
- `POST /api/orders/verify-payment` - Verify Razorpay payment
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/cancel` - Cancel order

### Weather
- `GET /api/weather/current` - Get current weather
- `GET /api/weather/forecast` - Get weather forecast
- `GET /api/weather/city/:cityName` - Get weather by city
- `GET /api/weather/alerts` - Get weather alerts

### Diagnostic
- `POST /api/diagnostic/analyze` - Analyze crop image
- `GET /api/diagnostic/history` - Get diagnostic history
- `GET /api/diagnostic/stats` - Get diagnostic statistics
- `GET /api/diagnostic/crop-types` - Get available crop types

### Admin
- `GET /api/admin/dashboard` - Get admin dashboard stats
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id` - Update user
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/products` - Get all products (admin view)
- `PUT /api/admin/products/:id` - Update product status
- `DELETE /api/admin/products/:id` - Delete product

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `RAZORPAY_KEY_ID` | Razorpay test key ID | Yes |
| `RAZORPAY_KEY_SECRET` | Razorpay test secret | Yes |
| `OPENWEATHER_API_KEY` | OpenWeatherMap API key | Yes |
| `PORT` | Server port (default: 5000) | No |
| `NODE_ENV` | Environment (development/production) | No |

## Getting API Keys

### OpenWeatherMap API
1. Go to [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key from the dashboard

### Razorpay Test Keys
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up for a test account
3. Get your test key ID and secret from the API Keys section

## Database Schema

### User Model
- Basic info: name, email, password, role
- Contact: phone, address
- Preferences: notifications, language, currency
- Timestamps: createdAt, updatedAt, lastLogin

### Product Model
- Basic info: name, description, category, price
- Media: images array
- Seller: seller ID and name
- Inventory: stock, unit
- Specifications: brand, organic, certified, etc.
- Reviews: rating, reviews array
- SEO: title, description, keywords

### Cart Model
- User: user ID
- Items: product ID, quantity, price
- Totals: totalItems, totalAmount
- Timestamps: lastUpdated

### Order Model
- Order info: orderNumber, user, items
- Shipping: address details
- Payment: method, status, Razorpay details
- Status: orderStatus, statusHistory
- Pricing: subtotal, shipping, tax, total

## Testing the API

You can test the API using:
- Postman
- Thunder Client (VS Code extension)
- curl commands
- Frontend application

### Example curl commands:

```bash
# Health check
curl http://localhost:5000/api/health

# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123","role":"farmer"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in .env
   - Verify database permissions

2. **JWT Token Errors**
   - Check JWT_SECRET in .env
   - Ensure token is being sent in Authorization header

3. **CORS Errors**
   - Check frontend URL in CORS configuration
   - Ensure frontend is running on correct port

4. **Razorpay Errors**
   - Verify test keys are correct
   - Check Razorpay dashboard for any issues

### Logs

Check the console output for detailed error messages. The server logs all requests and errors.

## Production Deployment

For production deployment:

1. Set `NODE_ENV=production`
2. Use strong JWT secret
3. Use production MongoDB instance
4. Use production Razorpay keys
5. Set up proper error monitoring
6. Use environment-specific configurations

## Support

If you encounter any issues, check:
1. Console logs for error messages
2. Network tab in browser dev tools
3. MongoDB connection status
4. Environment variable configuration
