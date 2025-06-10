import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              ECOMMERCE
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Your one-stop destination for quality products at affordable prices.
              Shop with confidence and style.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#4267B2' }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: '#1DA1F2' }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: '#E4405F' }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: '#333' }}>
                <GitHub />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/products/men" color="inherit" underline="hover">
                Men's Fashion
              </Link>
              <Link href="/products/women" color="inherit" underline="hover">
                Women's Fashion
              </Link>
              <Link href="/products/kids" color="inherit" underline="hover">
                Kids' Fashion
              </Link>
              <Link href="/cart" color="inherit" underline="hover">
                Shopping Cart
              </Link>
              <Link href="/favorites" color="inherit" underline="hover">
                Wishlist
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Customer Service
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Contact Us
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Shipping Info
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Returns & Exchanges
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Size Guide
              </Link>
              <Link href="#" color="inherit" underline="hover">
                FAQ
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ color: '#4caf50' }} />
                <Typography variant="body2">
                  123 Fashion Street, Style City, SC 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ color: '#4caf50' }} />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ color: '#4caf50' }} />
                <Typography variant="body2">support@ecommerce.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: '#333' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="grey.400">
            © 2024 ECOMMERCE. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="grey.400" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="grey.400" underline="hover">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;