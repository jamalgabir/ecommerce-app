import React from 'react';

import { useState,useEffect } from 'react';
import Product from './product';
import './products.css'
import axios from 'axios';

const Products = ({cat,filters,sorts}) => {
   const [product,setProduct]= useState([]);
   const [filterProducts, setFilterProducts] = useState([]);

   useEffect(() =>{
      const getProducts = async () =>{
         try{
            const res = await axios.get(cat?`http://localhost:5000/api/products?category=${cat}`:
            'http://localhost:5000/api/products');
            setProduct(res.data)
            


         }catch(error){
            console.log(error)
         }

      };
      getProducts();
   },[cat]);

   useEffect(()=>{
      cat&& setFilterProducts(
         product.filter(item=> Object.entries(filters).every(([key,value])=>
         item[key].includes(value)
         )
         )
      );
   },[product,cat,filters]);

   useEffect(()=>{
      if(sorts==='Newest'){
         setFilterProducts((prev)=>
         [...prev].sort((a,b)=>a.createdAt - b.createdAt)
       );
      }else if(sorts==='asc'){
         
            setFilterProducts((prev)=>
            [...prev].sort((a,b)=>a.price - b.price)
          );
      }else{
         setFilterProducts((prev)=>
            [...prev].sort((a,b)=>b.price - a.price)
         );
      }
       
   },[sorts])
   
   
  return (
  <div className='products-container'>
     {
        cat? filterProducts.map((item) =>
            <Product item={item} key={item.id}/>
         ):product.slice(0,12).map((item) =>
         <Product item={item} key={item.id}/>
        )
     }
  </div>
  );
};

export default Products;
