# SnapCart - Full Stack E-Commerce App

A complete e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js).

## Live Demo
Coming soon after deployment

## Features
- Browse products with search and category filter
- Add products to cart and manage quantities
- Remove items from cart with live total price
- User registration and login with JWT authentication
- Passwords encrypted with bcrypt
- Checkout flow with delivery details
- About and Contact pages
- Fully responsive design

## Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM for navigation
- Context API for cart state management
- Axios for API calls
- CSS inline styles

### Backend
- Node.js
- Express.js
- MongoDB Atlas (cloud database)
- Mongoose for database schema
- JWT for authentication
- bcryptjs for password hashing

## Project Structure
```
snapcart/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── ProductsPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── CheckoutPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   └── ContactPage.jsx
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   └── App.jsx
└── backend/
    ├── models/
    │   ├── Product.js
    │   └── User.js
    ├── routes/
    │   ├── products.js
    │   └── auth.js
    └── server.js
```

## Getting Started

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables
Create a `.env` file in the backend folder:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Get all products |
| GET | /api/products/:id | Get single product |
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |

## Built By
Joshika C — Fresher Web Developer