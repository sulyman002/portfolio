import React from 'react'
import Work from '../components/Work'
import myImage from "../assets/myImage2.jpg";

const Home = () => {
  return (
    <div className="mx-auto container px-6 md:px-0 flex flex-col gap-30">
      <div>
        <div className="flex items-center flex-col md:flex-row justify-between gap-5 pt-22">
          
          <div className=" w-[90%] md:w-[600px]">
            

          <svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMid slice"
  class="w-full h-auto"
>
  <defs>
    <clipPath id="slanted-bottom-rounded" clipPathUnits="objectBoundingBox">
 
      <path
        d="
          M0.02,0.02
          H0.98
          Q1,0.02 1,0.04
          V0.92
          Q0.7,1 0.02,0.98
          Q0,0.98 0,0.96
          V0.04
          Q0,0.02 0.02,0.02
          Z
        "
      />
    </clipPath>
  </defs>

  
  <image
    href={myImage}
    clip-path="url(#slanted-bottom-rounded)"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid slice"
  />
</svg>




          </div>
          
          
          <div className="">
            <div className="relative">
              <h2 className="text-[#242736] text-[40px] md:text-[45px] lg:text-[60px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
                <span className="block ml-[160px]">Frontend Developer</span>
                <span className="block">
                 & Mobile Developer
                </span>
              </h2>
              <p className="absolute top-0 left-0 text-[#ec5c29] text-[14px]">
                Oyedele Sulaiman
              </p>
            </div>
            <p className="text-[16px] md:text-[18px] text-[#808080]">
            Turning ideas into interactive, beautiful, and functional web realities.
          </p>
          </div>

          
          
        </div>
      </div>
      <Work limit={6} />
    </div>
  );
}

export default Home