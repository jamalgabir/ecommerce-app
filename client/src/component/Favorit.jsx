import React from 'react';
import Navbar from './navbar';
import "./favorit.css";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import  {deletFavorite} from '../redux/cartRedux';

const Favorit = () => {

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cart.Favorite)
    const handleClick = (id) =>{
      
      dispatch(deletFavorite(id))
  } 
  return (
    <div >
        <Navbar/>
        {/* <Announcement/> */}
        <div className='tit'>
            <h2>Your favorite items</h2>
          </div>

        {/* <div className='favorit-title'> */}
          
            <div className='favorite-container'>
              {items.length?items.map((item) =>(
                <div key={item.product._id} className='le-container2'>
                <div >
                    <img className='car-img' src={item.product?.img} alt='img'/>
                </div>
                <div className='oneOne'>
                    <Link className='ttt' to={`/products/find/${item.product._id}`}>
                    <div>
                        <p>{item.product.title}</p>
                    </div>
                    </Link>
                </div>
                <div className='delete'>
                  <DeleteOutline onClick={()=>handleClick(item.product._id)} className='xx'/>
              </div>
              </div>
              )):<div className='last-favorite'>
                <p>There is no favorite items</p>
                <Link to="/">
                <button style={{margin:10,backgroundColor:'teal',color:'white'}} className='btn'>Continue to shopping</button>
                </Link>
                
              </div>}
            </div>
        {/* </div> */}
        {/* <Newsletter/>
        <Footer/> */}
        
        
    </div>
  )
}

export default Favorit