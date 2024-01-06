import React from 'react';

const MenuItem = ({item}) => {
  const {name,image,price,recipe} = item
  return (
    <div className='flex space-x-4'>
      <img className='w-[100px]' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
      <div className="">
      <h3 className="">{name}................</h3>
      <p className="">{recipe}</p>
      </div>
      <p className="">${price}</p>
    </div>
  );
};

export default MenuItem;