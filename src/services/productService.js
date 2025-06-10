import { publicRequest } from './api';

export const productService = {
  getProducts: async (category = null) => {
    const url = category ? `/products?category=${category}` : '/products';
    const response = await publicRequest.get(url);
    return response.data;
  },

  getProduct: async (id) => {
    const response = await publicRequest.get(`/products/find/${id}`);
    return response.data;
  },
};