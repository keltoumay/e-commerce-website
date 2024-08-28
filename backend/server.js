// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import cors package
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes'); // Import the protected routes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const errorHandler = require('./utils/errorHandler');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors()); // This enables CORS for all routes by default

// Set Mongoose strictQuery option to suppress deprecation warning
mongoose.set('strictQuery', true); // or false, depending on your preference

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  }
};
connectDB();

// Middleware for parsing JSON requests
app.use(express.json({
  verify: (req, res, buf) => {
    console.log('Raw body:', buf.toString()); // Log raw request body
  }
}));

// Serve static files from 'public' directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000; // Use a different port if needed
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
