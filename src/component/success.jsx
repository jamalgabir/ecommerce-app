import React from 'react';
import './success.css';
const Success = () => {
  return (
  <div className='success-container'>
      <div className='success'>
      <div className='img-container'>
          <img className='img-suc' src='https://assets.awwwards.com/awards/images/2012/12/best-logo-2013-3.jpg' alt='img'/>
        </div>
      <button className='suc-btn'>Successfull.</button>
      <p className='suc-desc'>Your order is being prepared Thanks for shoosing as</p>
      </div>

  </div>
  );
};

export default Success;
