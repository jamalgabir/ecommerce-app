import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import React from 'react';
import './Slider.css'
import { sliderItem } from './Data';

const Slider = () => {

    const [slidIndex,setSlidIndex] = useState(0);

    const handleClick = (e) =>{
        console.log("hello")
        if(e==='left'){
            setSlidIndex(slidIndex> 0 ? slidIndex-1:2)

        }else{
            setSlidIndex(slidIndex<2 ? slidIndex +1 :0)
        }
            
    }
     
  return (
    <div className='slider-container'>
       <div className='arrow-left' onClick={() => handleClick('left')} >
        <ArrowLeftOutlined/>
       </div>
       <div className='slider-wrapper' style={{transform: `translateX(${slidIndex*-100}vw)`}}>
        {
            sliderItem.map((item) =>(
             <div className='slider' key={item.id} style={{backgroundColor: item.bg}}>
            <div className='img-container'>
                <img src={item.img} alt='img' className='img'/>
            </div>
            <div className='info-container'>
              <h1 className='title'>{item.title}</h1>
              <p className='des'>{item.desc}</p>
              <button className='btn'>SHOP NOW</button>
            </div>
           </div>
            ))
        }
        
        </div>
        
       <div className='arrow-right' onClick={() =>handleClick('right')}>
        <ArrowRightOutlined/>
       </div>
    </div>
  );
};

export default Slider;
