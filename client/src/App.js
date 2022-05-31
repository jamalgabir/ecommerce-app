import React from 'react';
import {
  Navigate,
  BrowserRouter,
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
//import { useSelector } from 'react-redux';
//import Favorit from './component/Favorit';
const App = () => {
  // const user = useSelector((state)=>state.user.currentUser);
  // console.log(user)
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/login' element={ user ? <Navigate replace to='/'/>:<Login/>}/>
      <Route path='/register' element={user ? <Navigate replace to="/"/>:<Register/>}/> */}
      <Route path='/products/:cater' element={<ProductList/>}/>
      <Route path='/products/find/:id' element={<SinglProduct/>}/>
      <Route path='/cart' element={<Card/>}/>
      <Route path='/pay' element={<Pay/>}/>
      

      <Route path='/success' element={<Success/>}/>
     </Routes>
     </BrowserRouter>
    
  )
};

export default App;
