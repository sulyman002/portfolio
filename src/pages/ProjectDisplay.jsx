import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../Data/Data";
import { LockKeyhole, X } from "lucide-react";

const ProjectDisplay = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));
  console.log(project);
  

  useEffect(() => {
    if(project) {
        document.body.classList.add("overflow-hidden");
    }else {
        document.body.classList.remove("overflow-hidden");
    }

    return () => {
        document.body.classList.remove("overflow-hidden");
    }
  }, [project])

  
  if (!project) return null;


  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-50 flex items-center justify-center">
      <div className="mt-50 w-full h-full bg-black flex justify-center overflow-y-auto pt-4">
        <div className="relative w-full px-6 md:px-0 md:w-3/4 lg:w-2/4 cursor-pointer ">
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
              <img src="" alt="" className="w-full h-full" />
              
            </div>
          </div>

          <div className="absolute top-[-5px] text-white left-0 flex items-center text-[12px] gap-4">
            <LockKeyhole size={12} />
            {/* {project.name} */} sulyman
          </div>
        </div>
      </div>

      {/* <div className="relative bg-white rounded-xl shadow-xl max-w-3xl w-[90%] p-6 overflow-hidden">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black transition"
        >
          <X size={20} />
        </button>

        <div className="w-full aspect-[16/9] rounded-md overflow-hidden mb-4">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
        </div>

        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="text-gray-600 text-sm">
          {project.description || "No description provided."}
        </p>
      </div> */}
    </div>
  );
};

export default ProjectDisplay;
