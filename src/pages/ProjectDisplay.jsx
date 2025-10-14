import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../Data/Data";
import { LockKeyhole, X } from "lucide-react";
import { Link } from "react-router-dom";
import myImage from "../assets/myImage2.jpg";

const ProjectDisplay = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (window.innerWidth < 768) {
        videoRef.current.play().catch((error) => console.error(error));
        setIsPlaying(true);
      }
    }
  }, []);
  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));
  console.log(project);

  useEffect(() => {
    if (project) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.lenis?.start();
    };
  }, [project]);

  if (!project) return null;

  return (
    // <!-- Overlay Wrapper -->
    <div
      id="overlay"
      // fixed inset-0 bg-black/20 backdrop-blur-[2px] h-screen z-50 flex items-center justify-center
      className="fixed inset-0 z-50 flex justify-center bg-[#DADFE4] backdrop-blur-[2px] transition-all duration-300 ease-out"
    >
      {/* <!-- Black Container (scrollable) --> */}
      <div
        data-lenis-prevent
        className="relative bg-black mt-3 md:mx-10 md:mt-10 rounded-2xl min-h-[90vh] w-full flex justify-center items-start overflow-y-auto "
      >
        {/* <!-- Content Area --> */}
        {/* w-[90%] h-auto md:px-0 md:w-3/4 lg:w-2/4 rounded-2xl shadow-lg  bg-[#ddd] */}
        <div className="w-[90%] md:w-full flex justify-center flex-col items-center">
          <div class="md:px-0 md:w-3/4 lg:w-3/4 my-10 rounded-2xl shadow-lg bg-[#ddd]   relative">
            <div className="bg-gray-300 h-[36px] flex rounded-t-2xl items-center justify-between  px-3">
              <div className=" flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex items-center gap-2">
                  <LockKeyhole size={12} />
                  <div className="text-xs text-gray-700 font-medium">
                    {project.name}
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="  border font-bold hover:bg-red-500 hover:text-white hover:border-none p-1 text-[#242736] cursor-pointer transition"
              >
                <X size={12} />
              </button>
            </div>
            <div className="flex flex-col">
              {/* preview video */}
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden group bg-gray-300"
              >
                <img
                  src={project.image}
                  alt="project image"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <video
                  ref={videoRef}
                  muted
                  loop
                  preload="none"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={project.video} />
                </video>
              </div>
              <div className="flex gap-5 py-12 px-5 w-full">
                {/* service column */}
                <div className="flex flex-col items-start gap-6 w-1/3">
                  {/* service */}
                  <div className="flex flex-col gap-2">
                    <p className=" text-[#242736] text-[14px] font-semibold">
                      Services
                    </p>
                    {/* render services here */}
                    <p className="text-[14px] text-[#808080] ">
                      {project.details.description}
                    </p>
                  </div>
                  {/* duration */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[#242736] text-[14px] font-semibold">
                      Duration
                    </p>
                    {/* render duration here */}
                    <p className="text-[14px] text-[#808080]">
                      {project.details.duration}
                    </p>
                  </div>
                  {/* live site */}
                  <div className="flex flex-col gap-2">
                    <p className="text-[#242736] text-[14px] font-semibold">
                      Live Site
                    </p>
                    {/* render live site here here */}
                    <a
                      href={project.details.liveSite}
                      className="text-[14px] text-[#808080] hover:text-[#ec5c29]"
                    >
                      {project.name}.com
                    </a>
                  </div>
                </div>
                {/* About site */}
                <div className="flex-1 flex-col gap-3">
                  <p className="text-[#242736] text-[18px] font-semibold">
                    {/* render work title here */}
                    <span>{project.name}</span> Website
                  </p>
                  {/* render body here */}
                  <div className="text-[14px] text-[#808080]">
                    {project.details.description}
                  </div>
                </div>
              </div>
              {/* mobile display */}
              <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden bg-gray-300">
                <img
                  src={project.mobilePreview}
                  alt="mobile preview"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* features */}
              <div className="flex flex-col gap-5">
                {/* feature header */}
                <p className="text-[#242736] text-[18px] font-semibold">
                  Features
                </p>

                {/* render list of features here */}
                <ul>
                  <li></li>
                </ul>
              </div>
              {/* tech Stack */}
              <div className="w-full flex flex-col justify-center items-center py-5">
                <p className="font-['Space_Grotesk'] font-bold text-[#242736] text-[18px] ">
                  Tech Stack
                </p>
                <hr className="text-gray-100 border w-full" />
                <div className="flex items-center gap-4 mt-5">
                  {project.techStack.map((stack, index) => (
                    <div
                      key={index}
                      className="cursor-pointer flex gap-8 h-[50px] w-[50px] md:h-[70px] md:w-[70px] flex-col items-center justify-center rounded-full p-2 bg-white/20 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30 hover:border-white/30"
                    >
                      <img src={stack} alt="tech stack" className="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full items-center justify-center py-6">
              <div class=" bg-cover bg-center flex items-center justify-center p-6">
                <div class="w-full max-w-md p-6 rounded-2xl bg-[#ddd]/30 backdrop-blur-md border border-white/10 shadow-lg drop-shadow-lg">
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-xl font-semibold">
                      <img
                        src={myImage}
                        alt=""
                        className=" rounded-full h-14 w-14 object-cover"
                      />
                    </div>
                    <div>
                      <h3 class="text-[#242736] font-bold text-lg">
                        Sulaiman Oyedele
                      </h3>
                      <p class="text-[#242736] text-sm">
                        Frontend Engineer • Pulsepoint Tech
                      </p>
                    </div>
                  </div>

                  <p class="mt-4 text-[#808080] text-sm">
                    Building elegant, efficient, and automated frontend
                    experiences.
                  </p>

                  <div class="mt-6 flex gap-3">
                    {/* direct to what up */}
                    <a target="_blank" href="https://wa.me/2348076293177" class="px-4 py-2 rounded-md bg-[#242736] text-white backdrop-blur-sm border border-white/8 hover:bg-white/16 transition">
                      Message
                    </a>
                    {/* open email */}
                    <button class="px-4 py-2 rounded-md bg-[#ec5c29] text-white font-semibold shadow-sm hover:scale-[1.02] transition-transform">
                      Hire me
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="is-txt-case-contact-bg">Contact</div>

          <div className="overflow-hidden relative text-[214px] md:text-[320px] w-full text-center pb-4 uppercase font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-[#2b2a2a] to-black/20">
            contact
            <Link
              to="www.gmail.com"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               text-red-600 text-[30px] md:text-[50px] tracking-[1px] capitalize font-['Space_Grotesk'] 
               flex items-center justify-center"
            >
              Let's work together
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
