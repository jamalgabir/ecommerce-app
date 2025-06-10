import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { clearCart } from '../store/slices/cartSlice';

const STRIPE_KEY = process.env.REACT_APP_STRIPE || 'pk_test_51KPXSjLh7941OZ3JMzKPvhjbWRXsEtbM3ChIBqIgjvqy7fuf2B3fDLbmGFwU2CQie9dBup9TbivCmhPSx78xz1H200nTwb3C3T';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, total } = useSelector((state) => state.cart);
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const handleInputChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const onToken = async (token) => {
    try {
      // Here you would typically send the token to your backend
      // For demo purposes, we'll just simulate a successful payment
      console.log('Payment token:', token);
      
      // Clear the cart and redirect to success page
      dispatch(clearCart());
      navigate('/success');
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  if (products.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
          Checkout
        </Typography>

        <Grid container spacing={4}>
          {/* Shipping Information */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                Shipping Information
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="firstName"
                    label="First Name"
                    value={shippingInfo.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="lastName"
                    label="Last Name"
                    value={shippingInfo.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="city"
                    label="City"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    name="zipCode"
                    label="ZIP Code"
                    value={shippingInfo.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    name="country"
                    label="Country"
                    value={shippingInfo.country}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, position: 'sticky', top: 20 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                Order Summary
              </Typography>
              
              <List>
                {products.map((product, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemAvatar>
                      <Avatar
                        src={product.img}
                        alt={product.title}
                        variant="rounded"
                        sx={{ width: 60, height: 60 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={product.title}
                      secondary={`${product.color} | ${product.size} | Qty: ${product.quantity}`}
                      sx={{ ml: 2 }}
                    />
                    <Typography variant="body1" fontWeight="bold">
                      ${(product.price * product.quantity).toFixed(2)}
                    </Typography>
                  </ListItem>
                ))}
              </List>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Subtotal:</Typography>
                <Typography>${total.toFixed(2)}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Shipping:</Typography>
                <Typography>Free</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Tax:</Typography>
                <Typography>${(total * 0.08).toFixed(2)}</Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Total:
                </Typography>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  ${(total * 1.08).toFixed(2)}
                </Typography>
              </Box>
              
              <StripeCheckout
                name="ECOMMERCE"
                description={`Your total is $${(total * 1.08).toFixed(2)}`}
                amount={(total * 1.08) * 100} // Stripe expects amount in cents
                token={onToken}
                stripeKey={STRIPE_KEY}
                billingAddress
                shippingAddress
              >
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ py: 1.5 }}
                >
                  Pay Now
                </Button>
              </StripeCheckout>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Checkout;