import { puplicReuest } from '../requestMethod';

// Mock data transformation to match your app's expected format
const transformProduct = (product) => ({
  _id: product.id.toString(),
  title: product.title,
  price: product.price,
  img: product.image,
  desc: product.description,
  category: product.category,
  color: ['black', 'white', 'red'], // Mock colors
  size: ['S', 'M', 'L', 'XL'], // Mock sizes
  inStock: true,
  createdAt: new Date().toISOString(),
});

export const productService = {
  getProducts: async (category = null) => {
    try {
      const url = category ? `/products/category/${category}` : '/products';
      const response = await puplicReuest.get(url);
      return response.data.map(transformProduct);
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  getProduct: async (id) => {
    try {
      const response = await puplicReuest.get(`/products/${id}`);
      return {
        product: transformProduct(response.data)
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },
};