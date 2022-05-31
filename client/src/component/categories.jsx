import React from 'react';
import CategoryItem from './categoryItem';
import { categories}  from './Data';

import './categories.css'
const Categories = () => {
  return (
  <div className='categories-container'>
        {
            categories.map((item)=>(
                <CategoryItem key={item.id} item={item}/>
            ))
        }

  </div>
  );
};

export default Categories;
