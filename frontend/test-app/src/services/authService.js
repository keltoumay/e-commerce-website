import axios from 'axios';

const login = async (email, password) => {
	  const response = await axios.post('/api/auth/login', { email, password });
	  localStorage.setItem('token', response.data.token);
	  return response.data;
};

const register = async (name, email, password) => {
	  const response = await axios.post('/api/auth/register', { name, email, password });
	  return response.data;
};

const logout = () => {
	  localStorage.removeItem('token');
};

export default { login, register, logout };
