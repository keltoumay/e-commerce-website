// verifyToken.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Function to verify a token
function verifyToken(token) {
  const secret = process.env.JWT_SECRET; // JWT secret from .env file

  try {
    const decoded = jwt.verify(token, secret);
    return decoded; // Return decoded token data
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return null;
  }
}

// Example token (replace with the token you want to verify)
const token = 'your-jwt-token-here'; // Replace with your token

// Verify token
const decoded = verifyToken(token);
console.log('Decoded Token:', decoded);
// verifyToken.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Function to verify a token
function verifyToken(token) {
  const secret = process.env.JWT_SECRET; // JWT secret from .env file

  try {
    const decoded = jwt.verify(token, secret);
    return decoded; // Return decoded token data
  } catch (err) {
    console.error('Token verification failed:', err.message);
    return null;
  }
}

// Example token (replace with the token you want to verify)
const token = 'your-jwt-token-here'; // Replace with your token

// Verify token
const decoded = verifyToken(token);
console.log('Decoded Token:', decoded);