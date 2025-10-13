import React, { useEffect, useRef } from "react";
import myImage from "../assets/myImg1.png";
import gsap from "gsap";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
    const navigate = useNavigate();
     const arrowRef = useRef(null);
      const buttonRef = useRef(null);
    
      useEffect(() => {
        gsap.set(arrowRef.current, { opacity: 0, x: -10, display: "none" });
    
        const btn = buttonRef.current;
    
        const handleMouseOver = () => {
          gsap.to(arrowRef.current, {
            opacity: 1,
            x: 0,
            display: "flex",
            duration: 0.3,
            ease: "power2.out",
          });
        };
    
        const handleMouseOut = () => {
          gsap.to(arrowRef.current, {
            opacity: 0,
            x: -10,
            display: "none",
            duration: 0.3,
            ease: "power2.in",
          });
        };
    
        btn.addEventListener("mouseenter", handleMouseOver);
        btn.addEventListener("mouseleave", handleMouseOut);
    
        return () => {
          btn.removeEventListener("mouseenter", handleMouseOver);
          btn.removeEventListener("mouseleave", handleMouseOut);
        };
      }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center gap-15 ">
        <div className="relative">
          <h2 className="text-[#242736] text-[26px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
            <span className="block ml-[120px]">Engineer of experience. </span>
            <span className="block">Coder of clarity.</span>
          </h2>
          <p className="absolute top-0 left-0 text-[#ec5c29] text-[16px]">
            About
          </p>
          <p className="text-[16px] md:text-[18px] text-[#808080] mt-5">
            I’m Sulaiman Oyedele, also known as Pulsepoint Tech, a Frontend
            Engineer from Oyo State, Nigeria. I’m passionate about leveraging
            technology to build efficient, user-friendly, and scalable digital
            experiences. My core stack includes JavaScript, TypeScript,
            React.js, Next.js, and Node.js. I’m driven by automation—always
            looking for smarter, faster ways to get things done—and committed to
            using technology to solve real-world problems.
          </p>

          <div  className="flex mt-5">
            <div
                onClick={() => {
                    navigate("/about")
                    scrollTo({top: 0, behavior: "smooth"})
                }}
                ref={buttonRef}
                className="flex items-center rounded-md cursor-pointer  text-white "
              >
                <button className="cursor-pointer px-6 py-3 font-semibold rounded-md bg-[#ec5c29]">
                  Learn more
                </button>
                <div
                  ref={arrowRef}
                  className="flex border-y h-full  items-center border-r border-orange-500 rounded-r-md px-[5px]"
                >
                  <Star size={15} className="text-orange-500" />
                </div>
              </div>
          </div>
          
        </div>
        <div className=" w-[90%] ">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-auto"
          >
            <defs>
              <clipPath
                id="slanted-bottom-rounded"
                clipPathUnits="objectBoundingBox"
              >
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
              clipPath="url(#slanted-bottom-rounded)"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
