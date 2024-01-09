import React from 'react';

const MenuItem = ({item}) => {
  const {name,image,price,recipe} = item
  return (
    <div className='flex space-x-4 flex-col sm:flex-row md:flex-row justify-center items-center sm:items-start sm:justify-end'>
      <img className='w-[100px]' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
      <div className="flex flex-col justify-center items-center sm:items-start  mt-6 sm:mt-0">
      <h3 className="font-bold text-xl text-yellow-500">{name}................</h3>
      <p className="text-yellow-600">{recipe}</p>
      </div>
      <p className="text-yellow-800 font-bold text-xl">${price}</p>
    </div>
  );
};

export default MenuItem;