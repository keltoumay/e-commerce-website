import axios from 'axios';

// Set base URL for axios
axios.defaults.baseURL = 'http://localhost:5000';

export const getProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`/api/products/${id}`);
  return response.data;
};