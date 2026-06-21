require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Connect to MongoDB
// Only connect if URI is present, to prevent crash without .env
if (process.env.MONGODB_URI) {
  connectDB();
} else {
  console.warn('MONGODB_URI not found in .env, skipping DB connection for now.');
}

const app = express();

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes Placeholder
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/treks', require('./routes/treks'));
// app.use('/api/blog', require('./routes/blog'));
// app.use('/api/bookings', require('./routes/bookings'));
// app.use('/api/payments', require('./routes/payments'));
// app.use('/api/reviews', require('./routes/reviews'));
// app.use('/api/contact', require('./routes/contact'));
// app.use('/api/newsletter', require('./routes/newsletter'));
// app.use('/api/admin', require('./routes/admin'));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
