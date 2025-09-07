# Price Tracking Website - Backend Setup Guide

This document outlines the backend infrastructure you'll need to set up to complete your price tracking website.

## 🏗️ Architecture Overview

Your price tracking website uses this architecture:
- **Frontend**: React/Vite (Already built ✅)
- **Backend API**: Node.js + Express.js
- **Databases**: PostgreSQL + MongoDB
- **Scraping Service**: Python microservice
- **Authentication**: Google OAuth + Username/Password
- **Notifications**: Email (SMTP) + Telegram Bot

## 📋 Setup Requirements

### 1. Database Setup

#### PostgreSQL Database
```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  google_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table  
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  url VARCHAR(500) UNIQUE NOT NULL,
  name VARCHAR(255),
  image_url VARCHAR(500),
  platform VARCHAR(50), -- 'amazon' or 'flipkart'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Price tracking table
CREATE TABLE price_alerts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  target_price DECIMAL(10,2),
  current_price DECIMAL(10,2),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### MongoDB Collections
```javascript
// price_history collection
{
  product_id: ObjectId,
  price: Number,
  timestamp: Date,
  platform: String
}

// scraped_data collection  
{
  url: String,
  name: String,
  price: Number,
  image_url: String,
  last_scraped: Date,
  platform: String
}
```

### 2. Environment Variables

Create a `.env` file in your backend directory:

```env
# Database
POSTGRES_URL=postgresql://username:password@localhost:5432/pricetracking
MONGODB_URL=mongodb://localhost:27017/pricetracking

# Authentication
JWT_SECRET=your-jwt-secret-key
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Telegram Bot
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_WEBHOOK_URL=https://your-domain.com/webhook/telegram

# Scraping Service
PYTHON_SCRAPER_URL=http://localhost:5000
SCRAPER_API_KEY=your-scraper-api-key
```

### 3. Required API Keys & Services

#### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/auth/google/callback`

#### Telegram Bot Setup  
1. Message [@BotFather](https://t.me/botfather) on Telegram
2. Create new bot with `/newbot`
3. Get your bot token
4. Set webhook URL for your bot

#### SMTP Setup (Gmail)
1. Enable 2-factor authentication on Gmail
2. Generate an app password
3. Use app password in SMTP_PASS

### 4. Backend API Structure

```
backend/
├── server.js              # Main Express server
├── routes/
│   ├── auth.js            # Authentication routes
│   ├── products.js        # Product management
│   ├── alerts.js          # Price alert management
│   └── telegram.js        # Telegram webhook
├── middleware/
│   ├── auth.js            # JWT authentication
│   └── validation.js      # Input validation
├── services/
│   ├── scraper.js         # Scraping service client
│   ├── email.js           # Email notifications
│   └── telegram.js        # Telegram bot logic
├── models/
│   ├── User.js            # User model (PostgreSQL)
│   └── Product.js         # Product model (MongoDB)
└── utils/
    ├── database.js        # Database connections
    └── helpers.js         # Utility functions
```

### 5. Python Scraping Service

```
scraper/
├── app.py                 # Flask API server
├── scrapers/
│   ├── amazon.py          # Amazon scraper
│   ├── flipkart.py        # Flipkart scraper
│   └── base.py            # Base scraper class
├── utils/
│   ├── proxy.py           # Proxy rotation
│   ├── headers.py         # Random headers
│   └── parser.py          # HTML parsing
└── requirements.txt       # Python dependencies
```

### 6. Key Dependencies

#### Backend (Node.js)
```json
{
  "express": "^4.18.2",
  "pg": "^8.8.0",
  "mongoose": "^7.0.0",
  "jsonwebtoken": "^9.0.0",
  "passport": "^0.6.0",
  "passport-google-oauth20": "^2.0.0",
  "nodemailer": "^6.9.0",
  "node-telegram-bot-api": "^0.61.0",
  "axios": "^1.3.0",
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5",
  "helmet": "^6.0.0"
}
```

#### Python Scraper
```txt
Flask==2.3.2
requests==2.31.0
beautifulsoup4==4.12.2
selenium==4.10.0
fake-useragent==1.2.1
redis==4.6.0
celery==5.3.0
```

### 7. Deployment Checklist

- [ ] Set up PostgreSQL database
- [ ] Set up MongoDB database  
- [ ] Configure Google OAuth
- [ ] Set up Telegram bot
- [ ] Configure SMTP email
- [ ] Deploy Python scraper service
- [ ] Deploy Node.js backend
- [ ] Set up domain and SSL
- [ ] Configure webhooks
- [ ] Test all integrations

### 8. Bot Protection Solutions

#### For Amazon/Flipkart Scraping:
- Use residential proxies
- Rotate user agents
- Add random delays
- Use headless browsers (Selenium)
- Implement CAPTCHA solving
- Monitor rate limits
- Use cloud scraping services as backup

#### Recommended Services:
- **Proxies**: Bright Data, ProxyMesh
- **CAPTCHA**: 2captcha, Anti-Captcha  
- **Cloud Scraping**: ScrapingBee, Apify

## 🚀 Getting Started

1. Set up databases (PostgreSQL + MongoDB)
2. Install dependencies for both services
3. Configure environment variables
4. Run the Python scraper service
5. Run the Node.js backend
6. Test with your React frontend

## 📞 Support

For implementation help:
- Backend API: Focus on REST endpoints for product tracking
- Scraping: Use rotating proxies and handle rate limiting
- Authentication: Implement both OAuth and traditional login
- Notifications: Set up both email and Telegram alerts

The frontend is ready - now you just need to build the backend services to power it! 🎉