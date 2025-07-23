import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.cart.favorites);

  if (favorites.length === 0) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ py: 8, flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ mb: 4 }}>
            Your favorites list is empty
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Start adding products to your favorites to see them here.
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
          Your Favorites ({favorites.length})
        </Typography>

        <Grid container spacing={3}>
          {favorites.map((item) => (
            <Grid item key={item.product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={item.product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Favorites;