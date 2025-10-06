import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';

const Nav = () => {

  const words = ["Creative Thinker","Frontend developer" , "Problem Solver", "Team Player", "Tech Enthusiast", "Innovation Driven"];
  const sliderRef = useRef(null);

  useEffect(() => {
  const q = gsap.utils.selector(sliderRef);
  const tl = gsap.timeline({ repeat: -1 }); // continuous loop

  q(".word").forEach((el) => {
    tl.fromTo(
      el,
      { y: "100%", opacity: 0 }, // start below
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
        <div className="hidden lg:flex">game</div>
        {/* mobile */}
        <div className="flex lg:hidden">ga,e</div>
      </div>
      </div>
    </div>
  )
}

export default Nav