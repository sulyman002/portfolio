import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { words } from '../Data/Data';
import { links } from '../Data/Data';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const sliderRef = useRef(null);
  // const containerRef = useRef(null);
  // const indicatorRef = useRef(null);
  

  useEffect(() => {
  const q = gsap.utils.selector(sliderRef);
  const tl = gsap.timeline({ repeat: -1 }); // continuous loop

  q(".word").forEach((el) => {
    tl.fromTo(
      el,
      { y: "100%", opacity: 0 }, 
      { y: "0%", opacity: 1, duration: .3 } 
    )
      .to(el, {
        y: "0%",
        opacity: 1,
        duration: 4,
      })
      .to(el, {
        y: "-100%", 
        opacity: 0, 
        duration: .3,
      });
  });
}, []);

useEffect(() => {},[])

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setOpen(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

const handleOpenNav = () => {
  setOpen(!open)
}



  

  return (
    <div className='shadow'>
      <div className="mx-auto container px-6 lg:px-0 md:py-6 py-3  ">
        <div className="flex items-center justify-between ">
        {/* logo here */}
        <div className='flex items-start flex-col gap-[2px]'>
          <p className="md:text-[17px] text-[14px] font-500 font-semibold text-[#242736] ">Oyedele Sulaiman</p>
         <div
        ref={sliderRef}
        className="overflow-hidden  h-[25px] w-full md:tex-[14px] text-[12px] text-[#A1A09F] flex items-center font-200 relative"
      >
        {words.map((word, index) => (
          <div key={index} className="word absolute w-full">
            {word}
          </div>
        ))}
      </div>
           </div>
        {/* hamburger & nav sections */}
        {/* @lg */}
        <div className="hidden lg:flex gap-3 items-center">
          <div className="flex items-center border border-[#cecece] bg-[#e5e5e5] rounded-[8px] p-[4.32px] text-[14.4px] gap-[12px] ">
            {links.map((link) => (
               <Link 
          key={link.path}
          to={link.path}
          className={`px-5 py-[6px] rounded-[8px] transition-all duration-800 ease-in-out z-10 ${
            location.pathname === link.path ? "bg-[#242736]/90 text-white" : "bg-gray-200"
          }`}
        >
          {link.label}
        </Link>
            ))}
            
           
          </div>
          {/* let's chat */}
          <div className="z-1 text-[#ec5c29] bg-transparent border border-[#cecece] rounded-[8px] transition-all duration-500 py-[8px] px-[18px] cursor-pointer text-center text-[15.52px] leading-[24px] font-400 font-medium ">
            Let's chat
          </div>

        </div>
        {/* mobile */}
        <div className="flex lg:hidden">

         <button onClick={handleOpenNav} className="w-[35px] h-[35px] flex items-center justify-center flex-col gap-[3px] cursor-pointer ">
          <div className={`w-[21px] h-[2.8px] rounded-full bg-[#333333] transform transition duration-300 ${open ? "rotate-45 translate-y-3" : null}`}></div>
          <div className={`w-[21px] h-[2.8px] rounded-full bg-[#333333] transform transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}></div>
          <div className={`w-[21px] h-[2.8px] rounded-full bg-[#333333] transform transition duration-300 ${open ? "-rotate-45 -translate-y-0" : null}`}></div>
          
         </button>
        </div>
        {/* mobile nav */}
      </div>

      <div
  className={`overflow-hidden transition-all duration-300  ${
    open
      ? "max-h-[400px] opacity-100 translate-y-0 ease-[cubic-bezier(0.22,1,0.36,1)]"
      : "max-h-0 opacity-0 -translate-y-3 ease-in delay-[150ms]"
  }`}>
    {open && (
         <div className="mt-5">
          <div className="flex items-center flex-col w-full text-[14.4px] gap-  6">
            {links.map((link) => (
               <Link 
           key={link.path}
          to={link.path}
          className={` py-[6px]  w-full flex items-center justify-center ${
            location.pathname === link.path ? " bg-gray-50/20 text-[#242736]" : ""
          }`}
        >
          {link.label}
        </Link>
            ))}
            
           
          </div>
         </div>
      )}
      <div className="z-1 text-[#ec5c29] bg-transparent mt-5 border border-[#cecece] rounded-[8px] transition-all duration-500 py-[8px] px-[18px] cursor-pointer text-center text-[15.52px] leading-[24px] font-400 font-medium ">
            Let's chat
          </div>
  </div>
      
      </div>
    </div>
  )
}

export default Nav