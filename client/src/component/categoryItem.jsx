import React from 'react';
import { Link } from 'react-router-dom';
import './categoryItem.css'
const CategoryItem = ({item}) => {
  return (
  <div className='catego-container' >
    
        <img className='catego-img' src={item.img} alt='img' />
        <div className='catego-info'>
           <h1 className='catego-title'>{item.title}</h1>
           <Link to={`/products/${item.cat}`}>
           <button className='catego-btn'>Shopping</button>
           </Link>
        </div>
      
  </div>
  );
};

export default CategoryItem;
