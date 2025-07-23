import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    total: 0,
    favorites: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(
        (product) => 
          product._id === action.payload._id &&
          product.size === action.payload.size &&
          product.color === action.payload.color
      );

      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      
      state.total += action.payload.price * action.payload.quantity;
    },
    
    removeProduct: (state, action) => {
      const productIndex = state.products.findIndex(
        (product) => JSON.stringify(product) === JSON.stringify(action.payload)
      );
      
      if (productIndex !== -1) {
        const product = state.products[productIndex];
        state.total -= product.price * product.quantity;
        state.products.splice(productIndex, 1);
      }
    },
    
    updateQuantity: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.products.find(
        (p) => JSON.stringify(p) === JSON.stringify(product)
      );
      
      if (existingProduct) {
        const quantityDiff = quantity - existingProduct.quantity;
        existingProduct.quantity = quantity;
        state.total += product.price * quantityDiff;
      }
    },
    
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
    
    addToFavorites: (state, action) => {
      const exists = state.favorites.find(
        (item) => item.product._id === action.payload.product._id
      );
      
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.product._id !== action.payload
      );
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateQuantity,
  clearCart,
  addToFavorites,
  removeFromFavorites,
} = cartSlice.actions;

export default cartSlice.reducer;