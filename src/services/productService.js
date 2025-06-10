import { puplicReuest } from '../requestMethod';

export const productService = {
  getProducts: async (category = null) => {
    const url = category ? `/products?category=${category}` : '/products';
    const response = await puplicReuest.get(url);
    return response.data;
  },

  getProduct: async (id) => {
    const response = await puplicReuest.get(`/products/find/${id}`);
    return response.data;
  },
};