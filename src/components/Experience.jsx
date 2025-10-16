import React, { useEffect } from "react";
import { useRef } from "react";
import { experiences } from "../Data/Data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Experience = () => {

    const cardsRef = useRef([]);

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            gsap.fromTo(card, {
                opacity: 0,
                y: 100,
            }, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "top 50%",
                    scrub: true,
                }
            })
        })
    }, [])

  return (
    <div className="my-16">
      <div className="flex justify-center">
        <div className="relative">
          <h2 className="text-[#242736] text-[24px] md:text-[26.8px] lg:text-[32px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
            <span className="block ml-[120px]">A glimpse into</span>
            <span className="block">my professional experience.</span>
          </h2>
          <p className="absolute top-0 left-0 text-[#ec5c29] text-[14px]">
            Work
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-16 gap-5">
        {experiences.map((experience, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className=" border border-[#ec5c29]/70 rounded-[10px] p-7 bg-[#808080]/10 backdrop-blur-md shadow-md"
          >
            {/* section 1 */}
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex items-start flex-col gap-1 text-[#242736]">
                <h2 className="text-[22px] font-bold">{experience.title}</h2>
                <h3 className="text-[18px] font-semibold">
                  {experience.company_name}
                </h3>
              </div>
              <div className="flex flex-col items-end ">
                <div className="px-[6px] py-[2px] bg-[#808080]/70 text-white/70 rounded-full">
                  {experience.date}
                </div>
              </div>
            </div>
            {/* section 2 body */}

            <div className="py-5">
              {experience.points.map((point, index) => (
                <ul key={index} className="text-[14px] list-disc ml-5 space-y-2 text-[#808080] ">
                  <li>{point}</li>
                </ul>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[14px] ">
              <div className="flex items-center justify-center gap-3">
               {experience.techStack?.map((stack, index) => (
                <div
                    key={index}
                    className="cursor-pointer flex gap-3 h-[40px] w-[40px] flex-col items-center justify-center rounded-full p-[2px] bg-white/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30 hover:border-white/30"
                  >
                    <img src={stack} alt="tech stack" className="" />
                  </div>
               ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
