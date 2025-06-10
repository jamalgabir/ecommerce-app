import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import { Delete, Add, Remove } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { removeProduct, updateQuantity } from '../store/slices/cartSlice';

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, total } = useSelector((state) => state.cart);

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeProduct(product));
    } else {
      dispatch(updateQuantity({ product, quantity: newQuantity }));
    }
  };

  const handleRemoveProduct = (product) => {
    dispatch(removeProduct(product));
  };

  if (products.length === 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 8, flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Your cart is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Looks like you haven't added any items to your cart yet.
          </Typography>
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
          >
            Continue Shopping
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
          Shopping Cart
        </Typography>

        <Grid container spacing={4}>
          {/* Cart Items */}
          <Grid item xs={12} md={8}>
            {products.map((product, index) => (
              <Card key={index} sx={{ mb: 2, display: 'flex' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 150, objectFit: 'cover' }}
                  image={product.img}
                  alt={product.title}
                />
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Box>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={`/product/${product._id}`}
                        sx={{ textDecoration: 'none', color: 'inherit', '&:hover': { color: 'primary.main' } }}
                      >
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Color: {product.color} | Size: {product.size}
                      </Typography>
                      <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                        ${product.price}
                      </Typography>
                    </Box>
                    <IconButton
                      onClick={() => handleRemoveProduct(product)}
                      color="error"
                    >
                      <Delete />
                    </IconButton>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton
                        onClick={() => handleQuantityChange(product, product.quantity - 1)}
                        size="small"
                      >
                        <Remove />
                      </IconButton>
                      <Typography sx={{ mx: 2, minWidth: '20px', textAlign: 'center' }}>
                        {product.quantity}
                      </Typography>
                      <IconButton
                        onClick={() => handleQuantityChange(product, product.quantity + 1)}
                        size="small"
                      >
                        <Add />
                      </IconButton>
                    </Box>
                    
                    <Typography variant="h6" fontWeight="bold">
                      ${(product.price * product.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                Order Summary
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Items ({products.length}):</Typography>
                <Typography>${total.toFixed(2)}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Shipping:</Typography>
                <Typography>Free</Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Total:
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  ${total.toFixed(2)}
                </Typography>
              </Box>
              
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={() => navigate('/checkout')}
                sx={{ mb: 2 }}
              >
                Proceed to Checkout
              </Button>
              
              <Button
                component={Link}
                to="/"
                variant="outlined"
                fullWidth
                size="large"
              >
                Continue Shopping
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Cart;