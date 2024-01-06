import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
  return (
    <div className='featured-item bg-fixed  bg-blur my-10 py-10'>
      <SectionTitle heading={'Featured Item'} subHeading={'check it out'}></SectionTitle>
      <div className="md:flex justify-center items-center text-black text-lg py-8 px-16 space-x-6">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="">
          <p className="">6 January, 2024</p>
          <p className="">where can i get some?</p>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore perferendis optio dolorem tempora fugit nesciunt qui debitis ducimus, eaque doloremque sint magnam laudantium quod exercitationem tenetur recusandae. In fuga modi magni perspiciatis eius praesentium assumenda atque tempora ea excepturi quaerat, a tenetur hic. Reiciendis sit consequatur voluptate aut praesentium atque.</p>
          <button className='uppercase btn btn-outline'>order now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;