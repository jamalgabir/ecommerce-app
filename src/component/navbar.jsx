import { Badge } from '@mui/material';
import { FavoriteBorder, Search, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import logo from '../Images/logo.jpg';
import './navbar.css'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const quantity = useSelector(state =>state.cart.products);
   

  return (
    <div className='navbar-Container'>
        <div className='wrapper'>
          <div className='left'>
              <img className='logo-img' src={logo} alt='img'/>
            </div>
            <div className='searchContainer'>
                  <input className='input' type='text' placeholder='Search'/>
                  <Search className='search-icon'/>
              </div>
          <div className='right'>
            <Link to="/favorit">
            <div className='favoriteTitle'>{<FavoriteBorder/>}</div>
            </Link>
              
              <Link to="/login">
              <div className='menuitem'>Login</div>
              </Link>
              
              <Link to="/cart">
              <div className='menuitem'>
                <Badge badgeContent={quantity?.length} color="primary">
                  <ShoppingCartOutlined color="action" />
                </Badge>
              </div>
              </Link>
              
            </div>

        </div>
        
    </div>
  )
}

export default Navbar;