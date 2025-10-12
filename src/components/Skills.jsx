import React, { useEffect, useRef } from "react";
import { core } from "../Data/Data";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
 
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: cards[0]?.parentNode, // triggers on the grid container
          start: "top 80%", // when 80% of viewport hits
          toggleActions: "play none none reverse", // replay when scrolled back up
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  return (
    <div className="mx-auto container px-6 md:px-0">
      <div className="flex flex-col">
        <h2 className="text-[#242736] flex items-center justify-center text-[20px] md:text-[30px] lg:text-[40px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
          Tech stack.
        </h2>

        <div className="flex flex-col w-full items-start">
          <div className="flex flex-col gap-8 w-full">
            <div className="flex gap-8 my-8 justify-center items-center flex-col w-full ">
              <h2 className="text-[#242736] flex items-start justify-center text-[16px] md:text-[20px] lg:text-[25px] font-600 font-bold tracking-wider font-['Space_Grotesk']">
                My core expertise...
              </h2>

              {/* all images should enter here */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {core.map((tech, index) => (
                  <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="cursor-pointer flex gap-3 h-[130px] w-[120px] md:h-[150px] md:w-[150px] flex-col items-center justify-center rounded-full p-8 bg-white/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30 hover:border-white/30"
                  >
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-[30px] h-[30px]"
                    />
                    <p className="text-[#242736]/75 font-semibold capitalize">
                      {tech.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div class="min-h-screen bg-[url('/path/to/your-photo.jpg')] bg-cover bg-center flex items-center justify-center p-6">
              {/* <!-- glass card --> */}
              <div class="w-full max-w-md p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/10 shadow-lg drop-shadow-lg">
                <div class="flex items-center gap-4">
                  <div class="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-xl font-semibold">
                    S
                  </div>
                  <div>
                    <h3 class="text-white font-bold text-lg">
                      Sulaiman Oyedele
                    </h3>
                    <p class="text-white/75 text-sm">
                      Frontend Engineer • Pulsepoint Tech
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-white/80 text-sm">
                  Building elegant, efficient, and automated frontend
                  experiences.
                </p>

                <div class="mt-6 flex gap-3">
                  <button class="px-4 py-2 rounded-md bg-white/12 text-white backdrop-blur-sm border border-white/8 hover:bg-white/16 transition">
                    Message
                  </button>
                  <button class="px-4 py-2 rounded-md bg-[#ec5c29] text-white font-semibold shadow-sm hover:scale-[1.02] transition-transform">
                    Hire me
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
