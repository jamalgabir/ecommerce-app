import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    title: 'Men\'s Fashion',
    image: 'https://images.pexels.com/photos/7670142/pexels-photo-7670142.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'men',
    description: 'Discover the latest trends in men\'s clothing',
  },
  {
    id: 2,
    title: 'Women\'s Fashion',
    image: 'https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'women',
    description: 'Elegant and stylish women\'s collection',
  },
  {
    id: 3,
    title: 'Kids\' Fashion',
    image: 'https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'kids',
    description: 'Comfortable and fun clothing for kids',
  },
];

const CategorySection = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          sx={{ mb: 6, fontWeight: 'bold' }}
        >
          Shop by Category
        </Typography>
        
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} md={4}>
              <Card
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={category.image}
                  alt={category.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                    {category.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {category.description}
                  </Typography>
                  <Button
                    component={Link}
                    to={`/products/${category.category}`}
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: 2 }}
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategorySection;