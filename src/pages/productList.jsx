import React from 'react';
import Navbar from '../component/navbar';
import './productList.css';
import Products from '../component/products';
import Footer from '../component/footer'
import  {useLocation}  from 'react-router-dom';
import { useState } from 'react';

const ProductList = () => {
   const location = useLocation();
   const cat = location.pathname.split('/')[2];
   const [filters, setFilters] = useState({});
   const [sorts, setSorts] = useState("newest");

   const handleChange = (e)=>{
      
           const value = e.target.value;
           setFilters({
              ...filters,
              [e.target.name]:value
           })
   };
 //console.log(filters)
  return (
  <div className='list-container'>
     <Navbar/>
     
     <h2 className='filter-title'>All you need about {cat}</h2>
     <div className='filter-container'>

       <div className='filter'>
           <span className='text'>Filter</span>
           <select name='color' defaultValue={'Color'} onChange={handleChange} className='select'>
               <option disabled>Color</option>
               <option>white</option>
               <option>black</option>
               <option>red</option>
               <option>blue</option>
               <option>yellow</option>
               <option>green</option>
           </select>
           <select name='size' defaultValue={'Size'} onChange={handleChange} className='select'>
               <option disabled>Size</option>
               <option>S</option>
               <option>M</option>
               <option>L</option>
               <option>XL</option>
               <option>XXL</option>
               
           </select>
        </div>

       <div className='filter'>
           <span className='text'>Sort</span>
           <select defaultValue={'newest'} onChange={(e) =>setSorts(e.target.value)} className='select'>
              <option value='newest'>Newest</option>
              <option value='asc'>Price (asc)</option>
              <option value='desc'>Price (desc)</option>
           </select>
        </div>

     </div>
     
      <Products cat={cat} filters={filters} sorts={sorts}/> 

     
    
     <Footer/>
  </div>
  );
};

export default ProductList;
