import React, { useEffect } from "react";
import Work from "../components/Work";
import myImage from "../assets/myImage2.jpg";
// import Experience from '../components/Experience';
import Experience2 from "../components/Experience02";

import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";


const Home = () => {
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

   const handleScrollToSection = (id) => (e) => {
    e.preventDefault();

    const target = document.getElementById(id);

    if(target && window.lenis) { window.lenis.scrollTo(target, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })}
  }
 



  return (
    <div className="mx-auto container px-6 md:px-0 flex flex-col ">
      <div className="h-screen">
        <div className="flex items-center flex-col md:flex-row justify-between gap-5 pt-22">
          <div className=" w-[90%] md:w-[600px]">
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

          <div className="">
            <div className="relative">
              <h2 className="text-[#242736] text-[40px] md:text-[45px] lg:text-[60px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
                <span className="block ml-[160px]">Frontend Developer</span>
                <span className="block">& Mobile Developer</span>
              </h2>
              <p className="absolute top-0 left-0 text-[#ec5c29] text-[14px] animate-bounce">
                Oyedele Sulaiman
              </p>
            </div>
            <p className="text-[16px] md:text-[18px] text-[#808080]">
              Turning ideas into interactive, beautiful, and functional web
              realities.
            </p>

            <div className="flex pt-10 space-x-10">
              <a href="#contact" onClick={handleScrollToSection("contact")}
                ref={buttonRef}
                className="flex items-center rounded-md cursor-pointer  text-white "
              >
                <button className="cursor-pointer px-6 py-3 font-semibold rounded-md bg-[#ec5c29]">
                  contact me
                </button>
                <div
                  ref={arrowRef}
                  className="flex border-y h-full  items-center border-r border-orange-500 rounded-r-md px-[5px]"
                >
                  <ArrowRight size={18} className="text-orange-500" />
                </div>
              </a>

              <div
               
                className="flex items-center rounded-md cursor-pointer  text-[#ec5c29] "
              >
                <button target="_blank"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/oyedele-sulaiman-CV.pdf"
                  document.body.appendChild(link);
                  link.click();
                  document.removeChild(link);
                }}
                className="cursor-pointer hover:shadow-lg transition-all hover:scale-101 duration-300 px-6 py-3 font-semibold rounded-md border border-[#808080]">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Work limit={6} />
      <div className="flex w-full justify-center pt-10">
        <div
          onClick={() => {
            navigate("/work");
            window.lenis?.scrollTo(0, {duration: 1.2})
          }}
          className="flex items-center rounded-md cursor-pointer  text-white "
        >
          <button className="cursor-pointer hover:shadow-lg transition-all hover:scale-101 duration-300 px-6 py-3 font-semibold rounded-md bg-[#ec5c29]">
            show more
          </button>
        </div>
      </div>
      
      <Experience2 />
      {/* Skills */}
      <Skills />
     
      <AboutMe />
    </div>
  );
};

export default Home;
