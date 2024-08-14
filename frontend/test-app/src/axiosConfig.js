import axios from 'axios';

// Set the base URL for all Axios requests
axios.defaults.baseURL = 'http://localhost:5000';

// Optional: You can also set other default options here
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default axios;