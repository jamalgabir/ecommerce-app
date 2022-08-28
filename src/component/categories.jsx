import React from 'react';
import CategoryItem from './categoryItem';
import { categories}  from './Data';

import './categories.css'
const Categories = () => {
  return (
    <div>
      <hr/>
      <div className='categories-container'>
        {
            categories.map((item)=>(
                <CategoryItem key={item.id} item={item}/>
            ))
        }

  </div>
  <hr/>
    </div>
  
  );
};

export default Categories;
