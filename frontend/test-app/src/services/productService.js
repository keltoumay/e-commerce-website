// src/services/productService.js
import axios from 'axios';

// Function to create a new product
export const createProduct = async (productData) => {
  const token = localStorage.getItem('token'); // Get the stored token from localStorage
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Include the token in the Authorization header
    }
  };
  
  const response = await axios.post('/api/products', productData, config);
  return response.data;
};

// Example functions for getting products - assuming these are already present
export const getProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`/api/products/${id}`);
  return response.data;
};

// Export all functions
export default { createProduct, getProducts, getProductById };
