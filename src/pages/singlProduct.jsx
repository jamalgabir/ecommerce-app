import React, { useEffect } from 'react';
import './singleProduct.css'
import Navbar from '../component/navbar';
//import NewsLetter from '../component/newsletter';
import Footer from '../component/footer';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Add, Remove } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import {  userReuest } from '../requestMethod';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import { IconButton, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
//import { Alert } from '@mui/material';
//import {addToFavorit} from "../redux/favoritRedux";

const SinglProduct = () => {

  
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split('/')[3];
  


  const [product, setProduct] = useState({});
  const [quantity, setquantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [message,setMessage] = useState("");
  const [rating, setRating] = useState(0);

  
  useEffect(() => {

    const getProduct = async () => {
      try {
        const res = await userReuest.get(`/products/find/${id}`)
        setProduct(res.data.product)
      }
      catch (error){
        console.log(error)

      }
    };
    getProduct();
  }, [id]);
  
  const handlequantity = (type) =>{
    if(type==='dec'){
      setquantity(quantity>1?quantity-1:quantity)
    }else{
      setquantity(quantity+1)
    }

  };

  const handleClick = () =>{
    if(color===''){
      return setMessage("Please select color!")
    }else if(size===''){
      return setMessage("Please select size!")
    }
    
    dispatch(addProduct({...product, quantity,size:size, color:color,  price:product.price}));
    setMessage("")
    
  }
  const handleChange = (newValue) => {
    
    setRating(newValue);
};

const stars = [];
for (let i = 0; i < 5; i++) {
    stars.push(
        <IconButton
            key={i}
            onClick={() => handleChange(i + 1)}
        >
            {i < rating ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
    );
}
const useStyles = makeStyles({
  root: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: "20px",
      marginBottom: "30px"
  },
  writeTitle: {
    marginLeft: "30px"

  },
  submit: {
    margin: "15px",
    marginLeft: "170px"
    
  },
  btn: {
    width: "100px",
    height: "30px",
    cursor: "pointer",
    backgroundColor: "green",
    color: "white",
    letterSpacing: "2px",
    border: "none"
    
  },
  textarea:{
    marginLeft: "30px"
  }
});

const classes = useStyles();
  
  
  return (
    <div className='single-container'>
      <Navbar />
      {/* <Announcement /> */}
      <div className='single-wrapper'>
        <div className='img-container'>
          <img src={product.img} alt='img' className='single-img' />
        </div>
        <div className='sin-info'>
          <h1 className='t'> {product.title}</h1>
          
          <h2 className='P'>${product.price}</h2>
          <h2>{product.inStock}</h2>
          <div className='filter-item'>
            <div className='color-container'>
              <h4 className='colo-titl'>Color</h4>
              <select onChange={(e)=>setColor(e.target.value)} className='op'>
                <option defaultValue={"color"}>color</option>
                {product.color?.map((c) => (
                  <option key={c}>{c}</option>
                ))}

              </select>
            </div>
            <div className='size-container'>
              <h4 className='colo-titl'>Size</h4>
              <select  onChange={(e)=>setSize(e.target.value)} className='op'>
                <option defaultValue={"size"}>size</option>
                {product.size?.map((s) =>(
                  
                  <option key={s}>{s}</option>
                  
                ))}
              </select>
            </div>
              
          </div>
          {message&&<p style={{color:"red"}}>{message}</p>}
          
          <div className='add-container'>
            <div className='amount-container'>
              <Remove onClick={()=>handlequantity('dec')} className='plus' />
              <span className='amount'>{quantity}</span>
              <Add onClick={()=>handlequantity('inc')} className='minus' />
            </div>
            <button onClick={handleClick}  className='add-btn'>Add to card</button>

          </div>
          <h2>Description</h2>
          <p className='D'>{product.desc}</p>
        </div>

      </div>
      <div className='review'>
      <div>
        <h2 className={classes.writeTitle}>WRITE A REVIEW</h2>
        <div className={classes.root}>
        {stars}
        <Typography>{rating}/5</Typography>
      </div>
      </div>
      <div>
      <textarea className={classes.textarea} placeholder='Write your comment here...' rows="4" cols="50" name="comment" form="usrform">
        </textarea>
      </div>
      <div className={classes.submit}>
        <button className={classes.btn} type='submit'>SUBMIT</button>

      </div>
      </div>
      <Footer />

    </div>
  );
};

export default SinglProduct;
