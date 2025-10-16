import React from "react";
// import Faq from "../components/Faq.jsx";
// import Essential from "../components/Essential";
import myImage from "../assets/myImg2.png";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 items-center gap-15 mx-auto container px-6 md:px-0 ">
        <div className="relative">
          <h2 className="text-[#242736] text-[26px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
            <span className="block ml-[120px]">Engineer of experience. </span>
            <span className="block">Coder of clarity.</span>
          </h2>
          <p className="absolute top-0 left-0 text-[#ec5c29] text-[16px]">
            About
          </p>
          <p className="text-[16px] md:text-[18px] text-[#808080] mt-5">
            I’m Sulaiman Oyedele (Pulsepoint Tech), a Frontend Engineer and
            penultimate-year student at the Federal University of Technology,
            Minna. I specialize in JavaScript, TypeScript, and frameworks like
            React.js, Next.js, and Node.js. Passionate about technology and
            automation, I focus on creating seamless, scalable, and
            user-friendly digital experiences that solve real-world problems.
          </p>
        </div>
        <div className=" w-full ">
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
      {/* about me */}
      {/* <Essential /> */}
      {/* <Faq /> */}
    </div>
  );
};

export default About;
