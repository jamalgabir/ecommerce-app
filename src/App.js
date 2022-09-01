import React from 'react';

import {
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import ProductList from './pages/productList';
import SinglProduct from './pages/singlProduct';
import Register from './component/rigister/register';
import Login from './component/rigister/login';
import Card from './pages/Card';
import Pay from './component/pay';
import Success from './component/success';
import  Favorite  from './component/Favorit';
 import { useSelector } from 'react-redux';
import RequireAuth from './component/RequireAuth';
const App = () => {
    //const user = useSelector((state)=>state.user.currentUser);
  //const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUser?.accessToken;

  return (

    
     <Routes>
      <Route element={<RequireAuth/>}>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/success' element={<Success/>}/>
      </Route>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
      <Route path='/products/:cater' element={<ProductList/>}/>
      <Route path='/products/find/:id' element={<SinglProduct/>}/>    
      
      <Route path='/cart' element={<Card/>}/>
      <Route path='/favorit' element={<Favorite/>}/>
     </Routes>
     
    
  )
};

export default App;
