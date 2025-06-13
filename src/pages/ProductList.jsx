import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Paper,
  Breadcrumbs,
  Link as MuiLink,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ErrorMessage from '../components/ui/ErrorMessage';
import { productService } from '../services/productService';

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    color: '',
    size: '',
    priceRange: '',
  });
  const [sortBy, setSortBy] = useState('newest');

  const categoryDisplayNames = {
    men: "Men's Fashion",
    women: "Women's Fashion",
    kids: "Kids' Fashion",
    accessories: "Accessories",
    electronics: "Electronics"
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProducts(category);
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.color) {
      filtered = filtered.filter((product) =>
        product.color?.includes(filters.color)
      );
    }
    if (filters.size) {
      filtered = filtered.filter((product) =>
        product.size?.includes(filters.size)
      );
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter((product) => {
        if (max) {
          return product.price >= min && product.price <= max;
        } else {
          return product.price >= min;
        }
      });
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
    }

    setFilteredProducts(filtered);
  }, [products, filters, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({ color: '', size: '', priceRange: '' });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== '');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Container maxWidth="lg" sx={{ py: 4, flexGrow: 1 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <MuiLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MuiLink>
          <Typography color="text.primary">
            {category ? categoryDisplayNames[category] || category : 'All Products'}
          </Typography>
        </Breadcrumbs>

        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 4, textTransform: 'capitalize', fontWeight: 'bold' }}
        >
          {category ? categoryDisplayNames[category] || `${category}'s Fashion` : 'All Products'}
        </Typography>

        {/* Filters and Sorting */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Filter & Sort
          </Typography>
          
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Color</InputLabel>
                <Select
                  value={filters.color}
                  label="Color"
                  onChange={(e) => handleFilterChange('color', e.target.value)}
                >
                  <MenuItem value="">All Colors</MenuItem>
                  <MenuItem value="white">White</MenuItem>
                  <MenuItem value="black">Black</MenuItem>
                  <MenuItem value="red">Red</MenuItem>
                  <MenuItem value="blue">Blue</MenuItem>
                  <MenuItem value="green">Green</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Size</InputLabel>
                <Select
                  value={filters.size}
                  label="Size"
                  onChange={(e) => handleFilterChange('size', e.target.value)}
                >
                  <MenuItem value="">All Sizes</MenuItem>
                  <MenuItem value="S">Small</MenuItem>
                  <MenuItem value="M">Medium</MenuItem>
                  <MenuItem value="L">Large</MenuItem>
                  <MenuItem value="XL">X-Large</MenuItem>
                  <MenuItem value="XXL">XX-Large</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Price Range</InputLabel>
                <Select
                  value={filters.priceRange}
                  label="Price Range"
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                >
                  <MenuItem value="">All Prices</MenuItem>
                  <MenuItem value="0-25">$0 - $25</MenuItem>
                  <MenuItem value="25-50">$25 - $50</MenuItem>
                  <MenuItem value="50-100">$50 - $100</MenuItem>
                  <MenuItem value="100-200">$100 - $200</MenuItem>
                  <MenuItem value="200">$200+</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <FormControl fullWidth size="small">
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <MenuItem value="newest">Newest</MenuItem>
                  <MenuItem value="price-asc">Price: Low to High</MenuItem>
                  <MenuItem value="price-desc">Price: High to Low</MenuItem>
                  <MenuItem value="rating">Highest Rated</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              {hasActiveFilters && (
                <Chip
                  label="Clear Filters"
                  onClick={clearFilters}
                  onDelete={clearFilters}
                  color="primary"
                  variant="outlined"
                />
              )}
            </Grid>

            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="body2" color="text.secondary">
                {filteredProducts.length} products found
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
              No products found
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try adjusting your filters or browse all products
            </Typography>
          </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
};

export default ProductList;