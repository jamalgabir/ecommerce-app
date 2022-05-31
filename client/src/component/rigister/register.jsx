import React from 'react';
import './register.css';
const Register = () => {
  return (
  <div className='reg-container'>
      <div className='reg-wrapper'>
          <h1 className='reg-title'>CREATE AN ACCOUNT</h1>
          <form className='reg-form'>
              
              <input type='text' placeholder='name'/>
              
              <input type='text' placeholder='lastname'/>
              
              <input type='email' placeholder='email'/>
              
              <input type='password' placeholder='password'/>
              
              <input type='password' placeholder='Confirm password'/>
              <span>
                  By Creating account I processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
              </span>
              <button className='reg-btn'>Create Account</button>
          </form>

      </div>

  </div>
  );
};

export default Register;
