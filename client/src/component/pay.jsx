
import StripeCheckout from 'react-stripe-checkout';
import {useState,useEffect} from 'react';
import './pay.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
const key = 'pk_test_51KPXSjLh7941OZ3JMzKPvhjbWRXsEtbM3ChIBqIgjvqy7fuf2B3fDLbmGFwU2CQie9dBup9TbivCmhPSx78xz1H200nTwb3C3T';

const Pay = () => {
  const [stripeToken,setStripeToken] = useState(null)
  const navigate = useNavigate();

  const ontoken =(token)=>{
    console.log(token)
    setStripeToken(token)
  }

  useEffect(() =>{
  //console.log(stripeToken)
  const makeRequest = async () =>{
    try{
      const res = await axios.post(
        'http://localhost:5000/api/checkout/payment',
        {
         tokenId:stripeToken.id,
         amount:2000,
        }
      );
      navigate('/success')
     console.log(res.data);
     
     

    }catch(err){
      console.log(err)
    }
  };
  if(stripeToken) return makeRequest;
},[stripeToken,navigate]);

  return (
  <div className='pay-container'>
    
    <StripeCheckout name='jamal shop' image='https://assets.awwwards.com/awards/images/2012/12/best-logo-2013-3.jpg'
    billingAddress 
    shippingAddress
    description='your totale is $50'
    amount={2000}
    token={ontoken}
    locale='auto'
    allowRememberMe={false}
    stripeKey={key}
    >
      <button className='pay'>Pay Now</button>
    </StripeCheckout>
    
    
    
  </div>
  );
};

export default Pay;
