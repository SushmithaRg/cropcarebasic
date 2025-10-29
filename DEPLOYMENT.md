# CropCare 360 - Deployment Guide

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Setup Steps

1. **Clone and Install**
```bash
git clone <repository>
cd cropcare-360
npm install
```

2. **Environment Configuration**
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Start Development Servers**
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend
npm run server
```

4. **Access Application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- Health Check: http://localhost:3001/health

## 🔧 Environment Variables

### Required Variables
```env
# Server Configuration
PORT=3001
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_here

# Database
DB_PATH=./db/cropcare.db

# ML Diagnosis (Optional)
ML_ENDPOINT=https://api.example.com/diagnose
ML_KEY=your_ml_api_key

# Payment Integration (Test Mode)
RAZORPAY_KEY_ID=rzp_test_1234567890
RAZORPAY_KEY_SECRET=test_secret_key

# Feature Flags
ENABLE_ML_DIAGNOSIS=true
MAX_DIAGNOSES_PER_MINUTE=5
MAX_FILE_SIZE_MB=10
```

## 🐳 Docker Deployment

### Build and Run
```bash
# Build image
docker build -t cropcare-360 .

# Run with docker-compose
docker-compose up -d

# Check logs
docker-compose logs -f
```

### Production Configuration
```yaml
# docker-compose.prod.yml
version: '3.8'
services:
  cropcare-app:
    image: cropcare-360:latest
    environment:
      - NODE_ENV=production
      - DB_PATH=/app/data/cropcare.db
    volumes:
      - ./data:/app/data
      - ./uploads:/app/server/uploads
```

## ☁️ Cloud Deployment

### Netlify (Frontend Only)
1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Environment variables in Netlify dashboard
4. Deploy backend separately (Railway/Heroku)

### Vercel (Frontend + Serverless)
```json
{
  "builds": [
    { "src": "package.json", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/server/index.js" },
    { "src": "/(.*)", "dest": "/dist/$1" }
  ]
}
```

### Railway (Full Stack)
1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically on push

### Heroku (Full Stack)
```bash
# Install Heroku CLI
heroku create cropcare-360

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_secret

# Deploy
git push heroku main
```

## 🗄️ Database Setup

### SQLite (Development)
- Automatically created on first run
- Located at `./db/cropcare.db`
- Includes seed data

### PostgreSQL (Production)
```sql
-- Update database.js to use PostgreSQL
-- Install pg package: npm install pg
-- Update connection string in .env
DATABASE_URL=postgresql://user:password@localhost:5432/cropcare
```

### MongoDB (Alternative)
```javascript
// Alternative NoSQL setup
// Install mongoose: npm install mongoose
MONGODB_URI=mongodb://localhost:27017/cropcare
```

## 🔐 Security Configuration

### Production Security Checklist
- [ ] Change default JWT secret
- [ ] Enable HTTPS with SSL certificates
- [ ] Configure CORS for production domains
- [ ] Set up rate limiting
- [ ] Enable request logging
- [ ] Configure file upload limits
- [ ] Set up backup strategy

### SSL Certificate Setup
```bash
# Using Let's Encrypt
certbot --nginx -d cropcare360.com
```

## 📊 Monitoring & Analytics

### Health Monitoring
```bash
# Health check endpoint
curl http://localhost:3001/health

# Response
{
  "status": "OK",
  "timestamp": "2024-01-15T10:30:00Z",
  "version": "1.0.0"
}
```

### Log Configuration
```javascript
// Add to server/index.js
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

## 🧪 Testing Setup

### Backend Tests
```bash
# Install test dependencies
npm install --save-dev jest supertest

# Run tests
npm run test:server
```

### Frontend Tests
```bash
# Install test dependencies
npm install --save-dev vitest @testing-library/react

# Run tests
npm run test:client
```

### E2E Tests
```bash
# Install Playwright
npm install --save-dev @playwright/test

# Run E2E tests
npm run test:e2e
```

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy CropCare 360
on:
  push:
    branches: [main]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        run: |
          # Add deployment commands
```

## 📱 Mobile App Deployment

### PWA Configuration
```json
// public/manifest.json
{
  "name": "CropCare 360",
  "short_name": "CropCare",
  "description": "Complete Agricultural Solution",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#22c55e",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## 🔧 Troubleshooting

### Common Issues

1. **Database Connection Error**
   - Check DB_PATH in .env
   - Ensure directory permissions
   - Verify SQLite installation

2. **ML Endpoint Failing**
   - Check ML_ENDPOINT and ML_KEY
   - Verify network connectivity
   - Fallback mode should activate automatically

3. **Payment Integration Issues**
   - Verify Razorpay test keys
   - Check CORS configuration
   - Ensure HTTPS for production

4. **File Upload Problems**
   - Check MAX_FILE_SIZE_MB setting
   - Verify uploads directory permissions
   - Ensure multer configuration

### Debug Mode
```bash
# Enable debug logging
DEBUG=true npm run server
```

### Performance Optimization
```javascript
// Add compression middleware
import compression from 'compression';
app.use(compression());

// Enable caching
app.use(express.static('dist', {
  maxAge: '1d',
  etag: true
}));
```

## 📈 Scaling Considerations

### Database Scaling
- Move to PostgreSQL for production
- Implement connection pooling
- Add database indexes for performance
- Set up read replicas

### File Storage Scaling
- Move to AWS S3 or Google Cloud Storage
- Implement CDN for image delivery
- Add image compression pipeline

### API Scaling
- Implement API versioning
- Add caching layer (Redis)
- Set up load balancing
- Monitor API performance

## 🎯 Production Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] Environment variables configured
- [ ] SSL certificates installed
- [ ] Database backups configured
- [ ] Monitoring setup complete

### Post-Deployment
- [ ] Health checks passing
- [ ] All features working
- [ ] Performance metrics normal
- [ ] Error tracking active
- [ ] Backup verification

---

**Support**: For deployment issues, check the troubleshooting section or create an issue in the repository.