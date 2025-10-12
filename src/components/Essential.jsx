import React from "react";


import { essential } from "../Data/Data";

const Essential = () => {
  return (
    <div className="mx-auto container py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6 md:px-0">
        {/* LEFT */}
        <div>
          <div className="relative">
            <h2 className="text-[#242736] text-[24px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
              <span className="block ml-[120px]">The three cornerstones</span>
              <span className="block">of a well-executed project.</span>
            </h2>
            <p className="absolute top-0 left-0 text-[#ec5c29] text-[14px]">
              Core values
            </p>
          </div>
        </div>
        <div className="text-[16px] md:text-[18px] text-[#808080]">
          Trust, transparency, and meeting deadlines form the foundation of my
          work. I prioritize clear communication and close collaboration with
          clients to bring their ideas to life.
        </div>
      </div>

      {/* RIGHT (scrollable part while pinned) */}

      <div className="flex flex-col md:flex-row items-center gap-6 py-8">
        {essential.map((item, index) => (
          <div
            key={index}
            style={{backgroundImage: `url(${item.image})`}}
            class={`bg-cover bg-center flex items-center rounded-2xl justify-center p-6"`}
          >
            {/* <!-- glass card --> */}
            <div class="grayscale hover:grayscale-0 transition duration-500 w-full max-w-md p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 shadow-lg drop-shadow-lg">
              <div class="flex items-center gap-4">
                
                <div>
                  <h3 class="text-[#242736] font-bold text-lg">{item.title}</h3>
                  
                </div>
              </div>

              <p class="mt-4 text-[16px] font-medium text-[#242736]/80">{item.desc}</p>
              <p class="text-[#ec5c29] text-sm mt-4">
                    Frontend Engineer • Pulsepoint Tech
                  </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essential;
