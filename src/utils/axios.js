import axios from 'axios';
import Auth from './Auth';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}`
});

axiosInstance.interceptors.request.use(
  (config) => {
    // This adds an authorization key to config object if a token exists.
    if (Auth.isAuthenticated()) {
      config.headers.common['Authorization'] = `Bearer ${Auth.getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong'
    )
);

export default axiosInstance;
