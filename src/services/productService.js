import { puplicReuest } from '../requestMethod';

// Mock data transformation to match your app's expected format
const transformProduct = (product) => ({
  _id: product.id.toString(),
  title: product.title,
  price: product.price,
  img: product.image,
  desc: product.description,
  category: product.category === "men's clothing" ? 'men' : 
           product.category === "women's clothing" ? 'women' : 
           product.category === 'jewelery' ? 'accessories' : 'electronics',
  color: ['black', 'white', 'red', 'blue', 'green'], // Mock colors
  size: ['S', 'M', 'L', 'XL', 'XXL'], // Mock sizes
  inStock: true,
  createdAt: new Date().toISOString(),
  rating: product.rating?.rate || 4.5,
  reviews: product.rating?.count || 100,
});

export const productService = {
  getProducts: async (category = null) => {
    try {
      let url = '/products';
      
      // Map category names to FakeStore API categories
      if (category) {
        const categoryMap = {
          'men': "men's clothing",
          'women': "women's clothing", 
          'kids': "women's clothing", // Use women's clothing for kids as fallback
          'accessories': 'jewelery',
          'electronics': 'electronics'
        };
        
        const apiCategory = categoryMap[category];
        if (apiCategory) {
          url = `/products/category/${encodeURIComponent(apiCategory)}`;
        }
      }
      
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

  getCategories: async () => {
    try {
      const response = await puplicReuest.get('/products/categories');
      return response.data.map(cat => ({
        id: cat,
        name: cat,
        displayName: cat.charAt(0).toUpperCase() + cat.slice(1)
      }));
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
};