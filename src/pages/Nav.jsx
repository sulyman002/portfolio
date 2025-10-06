import React, { useEffect } from 'react'
import { useRef } from 'react';
import gsap from 'gsap';

const Nav = () => {

  const words = ["Frontend", "Backend", "Fullstack", "Designer", "Developer"];
  const sliderRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sliderRef);
    const tl = gsap.timeline({ repeat: -1}); 

    q(".word").forEach((el) => {
      tl.fromTo(
        el,
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: .4,
        
        }
      ).to(el, {
        y: "0%",
        opacity: 0,
        delay: 6,
      })
      .to(el, {
        y: "-100%",
        opacity: 0,
        duration: 1,

      })
    });
  }, []);

  

  return (
    <div className='shadow'>
      <div className="mx-auto container px-6 lg:px-0 py-6 ">
        <div className="flex items-center justify-between ">
        {/* logo here */}
        <div className='flex items-start flex-col gap-[2px]'>
          <p className="text-[17px] font-600 font-semibold text-[#242736] ">Oyedele Sulaiman</p>
         <div
        ref={sliderRef}
        className="overflow-hidden  h-[25px] w-full tex-[12px] text-[#A1A09F] font-200 relative"
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