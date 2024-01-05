import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className='text-center my-10'>
      <p className="">---{subHeading}---</p>
      <h3 className="text-4xl uppercase font-bold">{heading}</h3>
    </div>
  );
};

export default SectionTitle;