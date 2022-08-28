import { FavoriteBorderOutlined, MoreHorizRounded } from '@material-ui/icons';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './product.css';
import { useDispatch,useSelector } from 'react-redux';
//import addToFavorit from '../redux/favoritRedux';
import { useState } from 'react';
import { addToFavorite,deletFavorite } from '../redux/cartRedux';

const Product = ({item}) => {

  const [co,setCo]= useState('');
  const [message,setMessage] =useState('');
  const [product,setProduct] = useState({});
  const dispatch = useDispatch();
  const favorit = useSelector(state=> state.cart.Favorite);
  const ID = favorit.filter((ite) =>ite.product?._id)
  const div = document.getElementsByClassName("icon")
  const colorcheck = ID.filter((i)=>i.product._id===item._id)
  //console.log(div)

  useEffect(() =>{
    
    setProduct(item)
    colorcheck?.length&&setCo('red')
  },[item,colorcheck])
  
  const handleClick = (id) =>{
    
    try{
        const check = ID.filter((i)=>i.product._id===id)
      if(check.length){
        dispatch(deletFavorite(id))
        setMessage("removed")
        setTimeout(()=>setMessage(''),2000)
      }else{
        dispatch(addToFavorite({product}))
        setMessage("added ")
        setTimeout(()=>setMessage(''),2000)
      }

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
          <div onClick={() =>handleClick(item._id)} className='icon'>
            <FavoriteBorderOutlined style={{color:"red"}}/>
            {message&&<p className='message'>{message}</p>}
          </div>  
      </div>
    </div>
    </div>
    
  );
};

export default Product;
