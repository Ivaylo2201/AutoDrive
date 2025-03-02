import axios, {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig
} from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.warn('Expired access token, refreshing...');

      try {
        const res = await http.post('/auth/refresh');
        localStorage.setItem('access', res.data.access);
        return http(error.config as AxiosRequestConfig);
      } catch {
        console.error('Expired refresh token, signing out...');
        localStorage.removeItem('access');
        window.location.href = '/auth/sign-in';
      }
    }
    return Promise.reject(error);
  }
);
