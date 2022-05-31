import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import './navbar.css'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //  const quantity = useSelector(state =>state.cart.products);
   

  return (
    <div className='navbar-Container'>
        <div className='wrapper'>
          <div className='left'>
              <p className='p'>English</p>
              <div className='searchContainer'>
                  <input className='input'/>
                  <Search style={{color:'gray',fontSize:16}}/>
              </div>
              
            </div>
          <div className='center'><h1 className='logo'>jamal</h1></div>
          <div className='right'>
            <Link to="/favorit">
            <div className='menuitem'>Favorit</div>
            </Link>
              
              {/* <Link to="/login">
              <div className='menuitem'>SignIn</div>
              </Link> */}
              
              <Link to="/cart">
              <div className='menuitem'>
                <Badge badgeContent={3} color="primary">
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
