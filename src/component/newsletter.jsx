import { Send } from '@mui/icons-material';
import React from 'react';
import './newsletter.css'
const Newsletter = () => {
  return (
    <div>
      <hr/>
      <div className='new-container'>

     <h1 className='new-title'>NEWS LETTER</h1>
     <div className='new-des'>GET EVERY NEWS FAVORITE FIRST </div>
     <div className='input-container'>
         <input placeholder='ENTER YOUR EMAIL' type="email" className="input"/>
         <button className='new-btn'><Send/></button>
     </div>
     
  </div>
    </div>
  
  );
};

export default Newsletter;