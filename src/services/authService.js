import { publicRequest } from '../services/api';

export const authService = {
  login: async (credentials) => {
    const response = await publicRequest.post('/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await publicRequest.post('/register', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('auth');
  },
};