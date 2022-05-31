import { EmailOutlined, Facebook, GitHub, Instagram, PhoneOutlined, RoomOutlined, Twitter } from '@material-ui/icons';
import React from 'react';

import './footer.css'
const Footer = () => {
  return (
  <div className='fo-container'>
    <div className='fo-left'>
        <h1 className='footer-logo'>JAMAL.</h1>
        <p className='footer-des'>Scaling/zooming animations are problematic for accessibility, as they are a common</p>
        <div className='media-container'>
            <div className='media-icon  facebook' style={{backgrounColor:'#4267B2'}}>
                <Facebook/>
            </div>
            <div className='media-icon gitub'>
                <GitHub/>
            </div>
            <div className='media-icon instagram'>
                <Instagram/>
            </div>
            <div className='media-icon twiter'>
                <Twitter/>

            </div>
        </div>
    </div>
    <div className='fo-center'>
        <h3 className='center-title'>USEFUL LINKS</h3>
        <ul className='ul'>
                <li className='li'>Home</li>
                <li className='li'>Card</li>
                <li className='li'>Man Fashion</li>
                <li className='li'>Woman Fashion</li>
                <li className='li'>Accessories</li>
                <li className='li'>Order Traking</li>
                <li className='li'>Wishlist</li>
                <li className='li'>Terms</li>
                
            </ul>
    </div>
    <div className='fo-right'>
        <h3 className='right-title'>Contact</h3>
        <div className='contact-item'>
          <RoomOutlined style={{marginRight:'10px',color:'lightgreen'}}/>
            Hroeh 18 Ramat Gan Tel Aviv 
        </div>
        <div className='contact-item'>
          <PhoneOutlined style={{marginRight:'10px',color:'lightgreen'}}/>
            +97254324990
        </div>
        <div className='contact-item'>
          <EmailOutlined style={{marginRight:'10px',color:'lightgreen'}}/> jamalgamy@gmail.com
        </div>
        <img className='pay-img' src='https://www.nicepng.com/png/detail/395-3955693_paypal-payment-method-logo.png' alt='payment'/>
    </div>
  </div>
  );
};

export default Footer;
