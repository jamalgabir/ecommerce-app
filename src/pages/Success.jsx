import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Success = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Container maxWidth="sm" sx={{ py: 8, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Paper
          sx={{
            p: 6,
            textAlign: 'center',
            width: '100%',
            borderRadius: 3,
            boxShadow: 3,
          }}
        >
          <CheckCircle
            sx={{
              fontSize: 80,
              color: 'success.main',
              mb: 3,
            }}
          />
          
          <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Order Successful!
          </Typography>
          
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Thank you for your purchase. Your order has been placed successfully and is being processed.
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4 }}>
            You will receive an email confirmation shortly with your order details and tracking information.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              size="large"
              sx={{ minWidth: 150 }}
            >
              Continue Shopping
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              sx={{ minWidth: 150 }}
            >
              Track Order
            </Button>
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
};

export default Success;