import { Announcement } from '@material-ui/icons'
import React from 'react'
import ProductList from '../pages/productList'
import Footer from './footer'
import Navbar from './navbar'
import Newsletter from './newsletter'
import Products from '../component/products';
import  {useLocation}  from 'react-router-dom';
import { useState } from 'react';
import "./favorit.css";
import { useDispatch } from 'react-redux';

const Favorit = () => {
    const dispatch = useDispatch();
    
  return (
    <div className='favoret-container'>
        <Navbar/>
        <div className='favorit-title'>
            <h1>Your favorit items </h1>
        </div>
        <Newsletter/>
        <Footer/>
        
        
    </div>
  )
}

export default Favorit