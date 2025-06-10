import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/7670142/pexels-photo-7670142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Summer Collection',
    subtitle: "Don't compromise on style",
    description: 'Get flat 30% off for new arrivals',
    category: 'women',
    backgroundColor: '#f5fafd',
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Autumn Sale',
    subtitle: 'Trendy & Comfortable',
    description: 'Discover the latest fashion trends',
    category: 'men',
    backgroundColor: '#fcfafd',
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Winter Collection',
    subtitle: 'Stay warm in style',
    description: 'Premium quality winter wear',
    category: 'kids',
    backgroundColor: '#f5fafd',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '80vh' },
        backgroundColor: currentSlideData.backgroundColor,
        overflow: 'hidden',
        transition: 'background-color 0.5s ease',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
          }}
        >
          {/* Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              zIndex: 2,
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2rem', md: '3.5rem' },
                color: 'text.primary',
              }}
            >
              {currentSlideData.title}
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                color: 'text.secondary',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
              }}
            >
              {currentSlideData.subtitle}
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: { xs: '1rem', md: '1.2rem' },
                color: 'text.secondary',
              }}
            >
              {currentSlideData.description}
            </Typography>
            
            <Button
              component={Link}
              to={`/products/${currentSlideData.category}`}
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                borderRadius: 2,
              }}
            >
              Shop Now
            </Button>
          </Box>

          {/* Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src={currentSlideData.image}
              alt={currentSlideData.title}
              sx={{
                maxWidth: '100%',
                maxHeight: { xs: '300px', md: '500px' },
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
        </Box>

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePrevSlide}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          onClick={handleNextSlide}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <ArrowForwardIos />
        </IconButton>

        {/* Slide Indicators */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentSlide ? 'primary.main' : 'rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;