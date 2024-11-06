import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = ({ categories }) => {
  return (
    <div>
      <div className='bg-[#9538E2] pb-2 text-white text-center '>
        <div className="w-10/12 m-auto flex flex-col gap-5 justify-center items-center py-16 mb-52">
          <h1 className="text-6xl font-bold"> Upgrade Your Tech Accessorize with Gadget Heaven Accessories </h1>
          <p className="text-xl"> Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! </p>
          <NavLink to='/dashboard' className="btn rounded-full text-[#9538E2] px-5 w-fit"> Shop Now </NavLink>
        </div>
      </div>
      <div className="relative -mt-52 z-10 w-8/12 m-auto p-5 border-2 border-white bg-[#9446d3] rounded-3xl">
        <img className='rounded-2xl' src="https://i.ibb.co.com/ZBStLSx/banner.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;