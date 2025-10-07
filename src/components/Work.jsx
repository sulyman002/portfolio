import { LockKeyhole } from "lucide-react";
import React from "react";
import { projects } from "../Data/Data.js";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Work = ({limit}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const productToDisplay = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="mx-auto container px-6 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="relative">
            <h2 className="text-[#242736] text-[20px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
              <span className="block ml-[120px]">A small showcase</span>
              <span className="block">of what I've worked on.</span>
            </h2>
            <p className="absolute top-0 left-0 text-[#ec5c29] text-[14px]">
              Work
            </p>
          </div>
        </div>
        <div className="text-[16px] md:text-[18px] text-[#808080]">
          This is a small showcase of what I've worked on a reflection of my
          passion for creating, learning, and bringing ideas to life. Each
          project represents my drive to grow and deliver meaningful work.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        {productToDisplay.map((project, index) => (
          <div
            onClick={() => {
              navigate(`/work/${project.id}`, {state: { background: location }});
            }}
            key={index}
            className="relative w-full aspect-[16/9] hover:scale-101 shadow hover:shadow-xl cursor-pointer transition-all "
          >
            <svg
              viewBox="0 0 1440 820"
              className="w-full h-auto"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M0,70 
                  Q0,40 30,40 
                  H380 
                  Q400,40 420,10 
                  Q430,0 450,0 
                  H1410 
                  Q1440,0 1440,30 
                  V820 
                  H0 
                  Z
                "
                fill="#ddd"
              />
            </svg>

            <div className="absolute top-[2px] left-0 w-full h-[calc(100%-2px)] overflow-hidden pt-6 lg:pt-7 px-1 pb-1 rounded-md">
              <div className="h-full rounded-md overflow-hidden">
                <img src={project.image} alt="" className="w-full h-full" />
              </div>
            </div>

            <div className="absolute top-[-5px] left-0 flex items-center text-[12px] gap-4">
              <LockKeyhole size={12} />
              {project.name}
            </div>
          </div>
        ))}
      </div>

      <Outlet />

      <div className="w-full bg-red-400 flex items-center justify-center py-2">
        <button>See More</button>
      </div>
    </div>
  );
};

export default Work;
