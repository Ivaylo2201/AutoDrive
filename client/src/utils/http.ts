import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const res = await http.post('/auth/refresh');
        localStorage.setItem('access', res.data.access);
      } catch {
        localStorage.removeItem('access');
      }
    }
    return Promise.reject(error);
  }
);
