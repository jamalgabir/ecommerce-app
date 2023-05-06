import { FavoriteBorderOutlined } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import StarIcon from '@material-ui/icons/Star';

import { useDispatch,useSelector } from 'react-redux';
//import addToFavorit from '../redux/favoritRedux';
import { useState } from 'react';
import { addToFavorite,deletFavorite } from '../redux/cartRedux';

const Product = ({item}) => {

  const [co,setCo]= useState('');
  //const [message,setMessage] =useState('');
  const [product,setProduct] = useState({});
  const dispatch = useDispatch();
  const favorit = useSelector(state=> state.cart.Favorite);
  const ID = favorit.filter((ite) =>ite.product?._id)
  const colorcheck = ID.filter((i)=>i.product._id===item._id)
  
  


  useEffect(() =>{
    
    setProduct(item)
    colorcheck?.length&&setCo('red')
  },[item,colorcheck])
  
  const handleClick = (id) =>{
    
    try{
        const check = ID.filter((i)=>i.product._id===id)
      if(check.length){
        dispatch(deletFavorite(id))
        setCo('')
        
        
      }else{
        dispatch(addToFavorite({product}))
        
        
      }

    }catch(error){
      console.log(error)
    }
    
      
    
  };
  
  

  return (
    <div>
      
      <div className='pro-container'>
      <div className="img-container">
        <Link to={`/products/find/${item._id}`}>
          <img className='pro-img' src={item.img} alt='img'/>
        </Link>
        <div onClick={() =>handleClick(item._id)} className='icon'>
            <FavoriteBorderOutlined style={{color:co}}/>
            
      </div> 
      </div> 
      <div className='description'>
        <h3 className='pro-title'>{item.title}</h3>
        <h3 className='pro-price'>{` $${item.price}`}</h3>
      </div>
      <div>
        <StarIcon/>
      </div>
      
      
      
    </div>

    </div>
    
  );
};

export default Product;
