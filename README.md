# CropCare 360 - Complete Plant Disease Diagnosis & Marketplace

A comprehensive agricultural platform with AI-powered plant disease diagnosis, marketplace, and savings features.

## 🌟 Features

- **AI Plant Disease Diagnosis**: Camera-based disease detection with confidence scoring
- **Marketplace**: Buy agricultural products with integrated checkout
- **Savings Jar**: Digital savings with round-up feature
- **Offline-First**: Works without internet, syncs when connected
- **Admin Dashboard**: Analytics and reporting
- **Multi-language Support**: English + Regional language support

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone and install
git clone <repository>
cd cropcare-360
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev

# Start backend server (in another terminal)
npm run server
```

### Environment Variables

```env
# ML Diagnosis API (optional - uses fallback if not provided)
ML_ENDPOINT=https://api.example.com/diagnose
ML_KEY=your_ml_api_key

# Payment Integration (test mode)
RAZORPAY_KEY_ID=rzp_test_your_key
RAZORPAY_KEY_SECRET=your_secret

# Database
DB_PATH=./db/cropcare.db

# Server
PORT=3001
JWT_SECRET=your_jwt_secret_key
```

## 🎯 Demo Script for Judges

### 1. Home Page Demo (30 seconds)
1. Open http://localhost:3000
2. Show clean, farmer-friendly interface
3. Click "Quick Diagnose" - camera opens instantly
4. Point to navigation showing all features

### 2. Disease Diagnosis Demo (60 seconds)
1. Go to "Diagnose" page
2. Upload sample plant image or use camera
3. Show progress animation during analysis
4. Display result with:
   - Disease name and confidence %
   - Recommended treatments
   - "Buy Treatment" button
5. Demonstrate "Send to Expert" fallback

### 3. Marketplace & Checkout (45 seconds)
1. Click "Buy Treatment" from diagnosis
2. Show filtered products
3. Add to cart, proceed to checkout
4. Test payment with Razorpay sandbox
5. Show order confirmation

### 4. Savings Jar Demo (30 seconds)
1. Navigate to Savings Jar
2. Show current balance
3. Demonstrate deposit/withdraw
4. Show round-up feature toggle
5. Export transaction CSV

### 5. Admin Dashboard (30 seconds)
1. Login as admin (admin@example.com / password123)
2. Show disease statistics charts
3. Display marketplace analytics
4. Export data as CSV

### 6. Offline Features (30 seconds)
1. Disconnect internet
2. Take diagnosis photo - shows queued
3. Reconnect - auto-sync demonstration
4. Show sync status indicator

## 🏗 Architecture

### Frontend (React + TypeScript)
```
src/
├── pages/           # Main application pages
├── components/      # Reusable UI components
├── services/        # API and offline sync logic
├── utils/          # Helper functions
├── styles/         # CSS and styling
└── types/          # TypeScript definitions
```

### Backend (Node.js + Express)
```
server/
├── routes/         # API endpoints
├── models/         # Database models
├── middleware/     # Auth, validation, rate limiting
├── services/       # Business logic
└── utils/          # Helper functions
```

### Database Schema (SQLite)
- **users**: User accounts and profiles
- **diagnoses**: Disease diagnosis records
- **products**: Marketplace items
- **orders**: Purchase transactions
- **savings**: Savings jar transactions
- **expert_queue**: Manual review queue

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/login` - Phone-based login
- `POST /api/auth/register` - User registration

### Diagnosis
- `POST /api/diagnose` - Submit image for diagnosis
- `GET /api/diagnose/:id` - Get diagnosis details
- `GET /api/diagnose` - List diagnoses with pagination
- `POST /api/expert-queue` - Queue for expert review

### Marketplace
- `GET /api/products` - List products
- `POST /api/cart` - Add to cart
- `GET /api/cart` - Get cart items
- `POST /api/orders` - Create order
- `POST /api/payments/create-order` - Payment integration

### Savings
- `GET /api/savings` - Get savings balance
- `POST /api/savings/deposit` - Add money
- `POST /api/savings/withdraw` - Withdraw money

### Admin
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/export/diagnoses` - Export diagnoses CSV
- `GET /api/export/savings` - Export savings CSV

## 🧪 Testing

### Run Tests
```bash
# Backend unit tests
npm run test:server

# Frontend tests
npm run test:client

# E2E tests
npm run test:e2e
```

### Test Accounts
- **Farmer**: farmer@example.com / password123
- **Admin**: admin@example.com / password123

### Test Payment
Use Razorpay test cards:
- Card: 4111 1111 1111 1111
- CVV: 123
- Expiry: Any future date

## 🚀 Deployment

### Local Production Build
```bash
npm run build
npm run start
```

### Docker Deployment
```bash
docker-compose up -d
```

### Cloud Deployment (Netlify/Vercel)
1. Connect repository
2. Set environment variables
3. Deploy frontend
4. Deploy backend to Railway/Heroku

## 🔧 ML Integration

### Using Custom ML Endpoint
Replace the ML_ENDPOINT in .env with your model:

```javascript
// Expected request format
POST /your-ml-endpoint
Content-Type: multipart/form-data
{
  image: File,
  crop_type?: string
}

// Expected response format
{
  disease: string,
  confidence: number, // 0-100
  remedies: string[],
  severity: 'low' | 'medium' | 'high'
}
```

### Fallback Mode
When ML endpoint is unavailable, the app uses:
1. Color analysis heuristics
2. Rule-based disease matching
3. Safe, low-cost remedy suggestions

## 📊 Performance & Limits

- **Rate Limiting**: 5 diagnoses per minute per user
- **Image Size**: Max 10MB per upload
- **Offline Storage**: 50MB IndexedDB limit
- **CSV Export**: Max 10,000 records per export

## 🌐 Internationalization

Add new languages in `src/i18n/`:
```javascript
// src/i18n/hi.json (Hindi example)
{
  "home.title": "फसल देखभाल 360",
  "diagnose.button": "निदान करें"
}
```

## 🔒 Security Features

- JWT-based authentication
- Input validation and sanitization
- Rate limiting on API endpoints
- Secure file upload handling
- CORS protection

## 📱 Mobile Optimization

- Progressive Web App (PWA) ready
- Camera API integration
- Touch-friendly interface
- Offline-first architecture
- Responsive design

## 🎨 Branding & Design

- **Primary Color**: Green (#22c55e) - represents agriculture
- **Secondary Color**: Blue (#3b82f6) - represents technology
- **Font**: Inter - clean, readable
- **Logo**: Leaf + Technology icon combination

## 🐛 Troubleshooting

### Common Issues

1. **Camera not working**: Check HTTPS requirement for camera API
2. **ML endpoint failing**: Verify ML_ENDPOINT and ML_KEY in .env
3. **Payment failing**: Ensure Razorpay test keys are correct
4. **Database errors**: Check DB_PATH and permissions

### Debug Mode
Set `DEBUG=true` in .env for detailed logging.

## 📈 Monitoring & Analytics

- Request timing logs
- Error tracking
- User activity metrics
- Disease detection accuracy
- Marketplace conversion rates

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Add tests for new features
4. Submit pull request

## 📄 License

MIT License - see LICENSE file for details.

---

**Judge Mode**: Visit `/judge-demo` for automated 3-minute demonstration.

**Support**: For technical issues, check the troubleshooting section or create an issue.