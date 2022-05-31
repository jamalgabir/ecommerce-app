import React from 'react';
import Navbar from '../component/navbar';

import Announcement from '../component/announcement';
import Slider from '../component/Slider';
import Categories from '../component/categories';
import Products from '../component/products';
import Newsletter from '../component/newsletter';
import Footer from '../component/footer';


const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Announcement/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
