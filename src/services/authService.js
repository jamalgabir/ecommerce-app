import { puplicReuest } from '../requestMethod';

export const authService = {
  login: async (credentials) => {
    const response = await puplicReuest.post('/login', credentials);
    return response.data;
  },

  register: async (userData) => {
    const response = await puplicReuest.post('/register', userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('auth');
  },
};