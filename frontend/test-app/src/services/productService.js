import axios from 'axios';

const getProducts = async () => {
	  const response = await axios.get('/api/products');
	  return response.data;
};

const getProductById = async (id) => {
	  const response = await axios.get(`/api/products/${id}`);
	  return response.data;
};

export default { getProducts, getProductById };
