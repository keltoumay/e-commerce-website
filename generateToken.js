// generateToken.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Function to generate a token
function generateToken(user) {
  const payload = { id: user.id, email: user.email }; // User data
  const secret = process.env.JWT_SECRET; // JWT secret from .env file
  const options = { expiresIn: '1h' }; // Token expiration time

  return jwt.sign(payload, secret, options);
}

// Example user object
const user = { id: '123', email: 'user@example.com' };

// Generate token
const token = generateToken(user);
console.log('Generated Token:', token);