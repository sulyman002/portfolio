import { LockKeyhole } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { projects } from "../Data/Data.js";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdGlobe } from "react-icons/io";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = ({ limit }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef(null);

  const productToDisplay = limit ? projects.slice(0, limit) : projects;

  useEffect(() => {
    const workItems = containerRef.current.querySelectorAll(".work");

    workItems.forEach((item) => {
      const work = item.querySelectorAll(".animate-work");

      gsap.fromTo(
        work,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="mx-auto container mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="relative">
            <h2 className="text-[#242736] text-[24px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
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

      <div className="work grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
        {productToDisplay.map((project, index) => (
          <div
            onClick={() => {
              navigate(`/work/${project.id}`, {
                state: { background: location },
              });
            }}
            key={index}
            className="animate-work relative w-full aspect-[16/9] h hover:scale-101 shadow-md hover:shadow-xl cursor-pointer transition-all duration-700 group"
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
                fill="#F5F5F5"
              />
            </svg>

            <div className="absolute top-[2px] left-0 w-full h-[calc(100%-2px)] overflow-hidden pt-6 lg:pt-7 px-1 pb-1 rounded-md">
              <div className="h-full rounded-md overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute top-[-5px] left-0 flex items-center text-[11px] gap-4">
              <LockKeyhole size={12} />
              {project.name}
            </div>

            {/* 🔹 Hover overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-all duration-500">
              <h3 className="text-lg font-semibold mb-2 capitalize font-['Space_Grotesk']">
                {project.name}
              </h3>
              <p className="text-[14px] ">Tech Stack</p>
              <div className="flex items-center gap-4 mt-5">
                {project.techStack.map((stack, index) => (
                  <div
                    key={index}
                    className="cursor-pointer flex gap-3 h-[20px] w-[20px] flex-col items-center justify-center rounded-full p-[2px] bg-white/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30 hover:border-white/30"
                  >
                    <img src={stack} alt="tech stack" className="" />
                  </div>
                ))}
              </div>

              {/* button */}

              <div
                onClick={() => {
                  navigate(`/work/${project.id}`, {
                    state: { background: location },
                  });
                  scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex mt-3 items-center rounded-md cursor-pointer  text-white "
              >
                <button className="cursor-pointer text-[10px] hover:shadow-lg transition-all hover:scale-101 duration-300 px-5 py-1 font-200 rounded-md bg-[#242736]">
                  see details
                </button>
              </div>
              {/* view live demo and go to github repository */}
              <div className="absolute bottom-8 flex items-center gap-8  ">
                <Link to={project.details.liveSite} className="relative hover:scale-102 transition-all duration-300 group/item flex flex-col w-20 items-center">
                  <div className=""><IoMdGlobe size={20} className=""/></div>
                  <div className="absolute bottom-[-18px] text-[14px] right-[-10px] hidden group-hover/item:flex duration-500 transition-all text-[#808080] font-bold">Visit live site</div>
                </Link>
                <div className="">2</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
};

export default Work;
