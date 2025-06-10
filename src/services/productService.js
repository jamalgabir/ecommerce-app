import { publicRequest } from './api';

export const productService = {
  getProducts: async (category = null) => {
    const url = category ? `/api/products?category=${category}` : '/api/products';
    const response = await publicRequest.get(url);
    return response.data;
  },

  getProduct: async (id) => {
    const response = await publicRequest.get(`/api/products/find/${id}`);
    return response.data;
  },
};