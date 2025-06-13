import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Rating,
  Chip,
  Alert,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
  Divider,
} from '@mui/material';
import { Add, Remove, ShoppingCart, Favorite, FavoriteBorder, LocalShipping, Security, Refresh } from '@mui/icons-material';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { productService } from '../services/productService';
import { addProduct, addToFavorites, removeFromFavorites } from '../store/slices/cartSlice';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);

  const isFavorite = favorites.some((item) => item.product._id === id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await productService.getProduct(id);
        setProduct(data.product);
        
        // Set default selections
        if (data.product.color?.length > 0) {
          setSelectedColor(data.product.color[0]);
        }
        if (data.product.size?.length > 0) {
          setSelectedSize(data.product.size[0]);
        }
      } catch (err) {
        setError('Failed to load product');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity((prev) => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      return;
    }

    const cartItem = {
      ...product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };

    dispatch(addProduct(cartItem));
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product._id));
    } else {
      dispatch(addToFavorites({ product }));
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MuiLink>
          <MuiLink component={Link} to={`/products/${product.category}`} underline="hover" color="inherit">
            {product.category}
          </MuiLink>
          <Typography color="text.primary">
            {product.title}
          </Typography>
        </Breadcrumbs>

        {addedToCart && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Product added to cart successfully!
          </Alert>
        )}

        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Box
                component="img"
                src={product.img}
                alt={product.title}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '600px',
                  objectFit: 'contain',
                  borderRadius: 2,
                }}
              />
            </Paper>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 2 } }}>
              <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
                {product.title}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={product.rating || 4.5} readOnly precision={0.5} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({product.rating || 4.5}/5) {product.reviews || 100} reviews
                </Typography>
              </Box>

              <Typography variant="h4" color="primary" sx={{ mb: 2, fontWeight: 'bold' }}>
                ${product.price}
              </Typography>

              {product.inStock === false && (
                <Chip label="Out of Stock" color="error" sx={{ mb: 2 }} />
              )}

              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.6 }}>
                {product.desc}
              </Typography>

              <Divider sx={{ my: 3 }} />

              {/* Color Selection */}
              {product.color && product.color.length > 0 && (
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Color</InputLabel>
                  <Select
                    value={selectedColor}
                    label="Color"
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    {product.color.map((color) => (
                      <MenuItem key={color} value={color}>
                        <Box sx={{ display: 'flex', alignItems: 'center', textTransform: 'capitalize' }}>
                          {color}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {/* Size Selection */}
              {product.size && product.size.length > 0 && (
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Size</InputLabel>
                  <Select
                    value={selectedSize}
                    label="Size"
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {product.size.map((size) => (
                      <MenuItem key={size} value={size}>
                        {size}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}

              {/* Quantity and Add to Cart */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'grey.300', borderRadius: 1 }}>
                  <IconButton onClick={() => handleQuantityChange('decrement')} disabled={quantity <= 1}>
                    <Remove />
                  </IconButton>
                  <Typography sx={{ px: 2, minWidth: '40px', textAlign: 'center' }}>
                    {quantity}
                  </Typography>
                  <IconButton onClick={() => handleQuantityChange('increment')}>
                    <Add />
                  </IconButton>
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCart />}
                  onClick={handleAddToCart}
                  disabled={product.inStock === false || !selectedColor || !selectedSize}
                  sx={{ flex: 1 }}
                >
                  Add to Cart
                </Button>

                <IconButton
                  onClick={handleFavoriteToggle}
                  color={isFavorite ? 'error' : 'default'}
                  size="large"
                  sx={{ border: 1, borderColor: 'grey.300' }}
                >
                  {isFavorite ? <Favorite /> : <FavoriteBorder />}
                </IconButton>
              </Box>

              {(!selectedColor || !selectedSize) && (
                <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                  Please select color and size before adding to cart
                </Typography>
              )}

              <Divider sx={{ my: 3 }} />

              {/* Additional Info */}
              <Paper sx={{ p: 3, backgroundColor: 'grey.50' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Product Benefits
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocalShipping sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">Free shipping on orders over $50</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Refresh sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">30-day return policy</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Security sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="body2">Secure payment processing</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default SingleProduct;