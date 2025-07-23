import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  Chip,
  Rating,
  Button,
} from '@mui/material';
import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites, addProduct } from '../../store/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);
  const [imageError, setImageError] = useState(false);

  const isFavorite = favorites.some((item) => item.product._id === product._id);

  const handleFavoriteToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      dispatch(removeFromFavorites(product._id));
    } else {
      dispatch(addToFavorites({ product }));
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const cartItem = {
      ...product,
      quantity: 1,
      color: product.color[0],
      size: product.size[0],
    };
    
    dispatch(addProduct(cartItem));
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component={Link}
          to={`/product/${product._id}`}
          sx={{
            height: 250,
            textDecoration: 'none',
            display: 'block',
          }}
        >
          <img
            src={imageError ? 'https://via.placeholder.com/250x250?text=No+Image' : product.img}
            alt={product.title}
            onError={handleImageError}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </CardMedia>
        
        <IconButton
          onClick={handleFavoriteToggle}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 1)',
            },
          }}
        >
          {isFavorite ? (
            <Favorite sx={{ color: 'red' }} />
          ) : (
            <FavoriteBorder />
          )}
        </IconButton>
      </Box>

      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          variant="h6"
          component={Link}
          to={`/product/${product._id}`}
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 1,
            fontSize: '1rem',
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {product.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating || 4.5} readOnly size="small" />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.reviews || 100})
          </Typography>
        </Box>
        
        <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mb: 1 }}>
          ${product.price}
        </Typography>
        
        {product.inStock === false && (
          <Chip
            label="Out of Stock"
            color="error"
            size="small"
          />
        )}
      </CardContent>

      <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={handleAddToCart}
          disabled={product.inStock === false}
          size="small"
          fullWidth
          sx={{ mx: 2 }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;