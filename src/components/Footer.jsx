import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mx-auto container px-6 md:px-0'>
      <div className="flex md:items-center gap-[40px] justify-between flex-col md:flex-row py-4 border-b border-gray-400/40 ">
        {/* email */}
        <a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=new' className="text-[#808080] text-[14px] hover:text-[#ec5c29] cursor-pointer ">oyedelesulaiman@gmail.com</a>


        {/* social media */}

        
        <nav className="">
          <ul className='text-[14px] text-[#808080]/60 whitespace-wrap space-x-[30px] '>
            <Link className='cursor-not-allowed text-[#808080] '>Follow me</Link>
            <Link className='hover:text-[#ec5c29]' target='_blank' to="https://www.linkedin.com/in/oyedele-sulaiman-a9a677210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" >linkedin</Link>
            <Link className='hover:text-[#ec5c29]' target='_blank' to="https://x.com/sulyman002" >twitter</Link>
            <Link className='hover:text-[#ec5c29]' target='_blank' to="https://github.com/sulyman002">github</Link>
          </ul>
        </nav>
      </div>

      <div className="flex items-center flex-col md:flex-row gap-[16px] mt-10 justify-between text-[#808080]/60 text-[14px]">
        <div className="w-full cursor-not-allowed ">#Pulsepoint</div>
        <div className=" flex items-center justify-center gap-8">
          <a href="#" className="hover:text-[#ec5c29]">Terms</a>
          <a href="#" className="hover:text-[#ec5c29]">Privacy</a>
        </div>
      </div>
      

    </div>
  )
}

export default Footer