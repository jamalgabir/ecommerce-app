import { FavoriteBorderOutlined, MoreHorizRounded } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import { useDispatch, useSelector } from 'react-redux';
//import addToFavorit from '../redux/favoritRedux';
import { useState } from 'react';


const Product = ({item}) => {

  const [product,setProduct] = useState({});
  const dispatch = useDispatch();
  //const favorit = useSelector(state=> state.favorit);
  


  useEffect(() =>{
    setProduct(item)
  },[item])

  console.log(product)

  const handleClick = () =>{
    try{
     

    }catch(error){
      console.log(error)
    }
  };

  return (

    <div>
      
      <div className='pro-container'>
      <img className='pro-img' src={item.img} alt='img'/> 
      <div className='pro-info'>
          <Link to={`/products/find/${item._id}`}>
         <div className='icon'>
            <MoreHorizRounded/>
          </div> 
          </Link>
          <div onClick={handleClick} className='icon'>
            <FavoriteBorderOutlined/>
          </div>  
      </div>
    </div>
    </div>
  );
};

export default Product;
