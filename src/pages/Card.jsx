import {  DeleteOutline } from '@mui/icons-material';
import React, { useState } from 'react';
import {  useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import StripeCheckout from 'react-stripe-checkout';
import './Card.css'
import { useEffect } from 'react';
import { userReuest } from '../requestMethod';
import { useDispatch } from 'react-redux';
import {deleteProduct } from '../redux/cartRedux';

const key = process.env.REACT_APP_STRIPE;

const Card = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart)
    //const [quantity,setQuantity] = useState(cart.quantity);
    const check = cart.products.length
    const [data, setData] = useState([])
    //const [sum, setSum] = useState(0);
    const navigate = useNavigate()
    const [stripeToken,setStripeToken] = useState(null);
    
    
    const ontoken = (token)=>{
        setStripeToken(token)
    }

   const handleDelete = async (id) =>{
    try{
        dispatch(deleteProduct(id,dispatch))
        
    }catch(error){
        console.log(error)
    }
}
useEffect(() => {
    setData(cart.products)
    
},[cart.products])

   useEffect(()=>{
      const makeRequest = async ()=>{
          try{
              await userReuest.post('/checkout/payment', {
                  tokenId:stripeToken.id,
                  amount:cart.totale*100,
                  
              });
              console.log(res)
              navigate('/success')
            }catch(error){
            console.log(error)

        }
      }
     stripeToken&& cart.totale>=1 && makeRequest();
   },[stripeToken,cart.totale,navigate])
    return (
  <div>
      <Navbar/>
      
      <h1 className='card-title'>Shopping Card</h1>

      <div className='top-cart-container'>
      {check?
       <div className='card-container'>
          <div className='mini-container'>
            <div className='cart-products-container'>
              {data.map((product) =>(
              
              <div className='le-container'>
                  <div className='one'>
                      <img className='car-img\' src={product.img} alt='img'/>
                  </div>
                  
                  <div className='two'>
                      <Link className='ttt' to={`/product/${product._id}`}>
                      <div>
                          <h4>{product.title}</h4>
                          
                      </div>
                      </Link>
                      
                      <p>${product.price}</p>
                      
                      <div className='size-amount'>
                          <h4>Size:</h4>
                          <p>{product.size}</p>
                          <h4>color:</h4>
                          <p>{product.color}</p>
                          <h4>{`Quantity : ${product.quantity}`}</h4>
                      </div>
                      <h4>{`Totale price: ${product.quantity*product.price}`}</h4>
                  </div>
                  <div className='delete'>
                    <DeleteOutline onClick={() => handleDelete(product)} className='xx'/>
                </div>
                </div>
                
                
                
               
                
               ))}
                
            </div>


                 {/* Ckeck container  */}
                <div className='ri-container'>
                    <div>
                        <h2>You'r Summary</h2>
                    </div>
                    
                    <div className='item'>
                        <p className='item-count'>Item :{cart.products.length}</p>
                        
                    </div>
                    {/* <div className='item'>
                        <p className='shipping'>Shipping:</p>
                        <b className='ship-pric'>$54.90</b>
                    </div> */}
                    
                    
                    <div className='item'>
                        <h3 className='subtotale'>Subtotal</h3>
                        <b className='totale-price'>${cart.totale}</b>
                    </div><hr></hr>
                    
                    <div className='checkout'>
                    <StripeCheckout name='jamal shop' 
                    image='https://assets.awwwards.com/awards/images/2012/12/best-logo-2013-3.jpg'
    billingAddress 
    shippingAddress
    description={`Your totale Amount is ${cart.totale}`}
    amount={cart.totale*100}
    token={ontoken}
    
    allowRememberMe={false}
    stripeKey={key}>

       <button className='pay1'>Checkout</button>
        </StripeCheckout>
    </div>
                    {/* <div className='btn-container'>
                        <button className='ri'></button>
                    </div> */}
                </div>
              
          </div>

          <div className='last'>
              <Link to="/">
              <button className='le'>Containue Shoppin</button>
              </Link>
                
            </div>
        
        
          
          
          </div>:
          <div className='empty-cart-container'>
                     <p>there is no item in your cart!</p>
                      <div>
                      <Link to='/'>
                       <button className='le'>Containue Shoppin</button>
                        </Link>
                         </div>
                    </div>}
    
        </div>
      {/* <Footer/> */}
  </div>
  );
};

export default Card;