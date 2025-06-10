import { publicRequest } from './api';

export const authService = {
  login: async (credentials) => {
    const response = await publicRequest.post('/api/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await publicRequest.post('/api/register', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('auth');
  },
};