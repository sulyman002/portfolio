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
    if (project) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [project]);

  if (!project) return null;

  return (
    // <!-- Overlay Wrapper -->
    <div
      id="overlay"
      // fixed inset-0 bg-black/20 backdrop-blur-[2px] h-screen z-50 flex items-center justify-center
      class="fixed inset-0 z-50 flex justify-center bg-[#DADFE4] backdrop-blur-[2px] transition-all duration-300 ease-out"
    >
      {/* <!-- Black Container (scrollable) --> */}
      <div class="bg-black mt-3 md:mx-10 md:mt-10 rounded-2xl min-h-[90vh] w-full flex justify-center items-start overflow-y-auto">
        {/* <!-- Content Area --> */}
        {/* w-[90%] h-auto md:px-0 md:w-3/4 lg:w-2/4 rounded-2xl shadow-lg  bg-[#ddd] */}
        <div class="w-[90%] md:px-0 md:w-3/4 lg:w-2/4 my-10 rounded-2xl shadow-lg bg-[#ddd]   relative">
            <div className="bg-gray-400 h-[36px] flex rounded-t-2xl items-center justify-between  px-3">
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
              className="  hover:text-gray-600 border font-bold hover:bg-red-500 hover:text-white hover:border-none p-1 text-[#242736] cursor-pointer transition"
            >
              <X size={12} />
            </button>
          </div>
          <p>Lorem*100</p>
        </div>
      </div>
    </div>

    // <div className=" fixed inset-0 bg-black/20 backdrop-blur-[2px] h-screen z-50 flex items-center justify-center">
    //   <div className=" px-0 md:mx-10 mt-5 md:mt-10 rounded-lg w-full min-h-screen bg-black flex justify-center pt-20 overflow-y-auto">
       
    //     <div className="w-[90%] h-auto md:px-0 md:w-3/4 lg:w-2/4 rounded-2xl shadow-lg  bg-[#ddd]">
    //       <div className="bg-gray-400 h-[36px] flex rounded-t-2xl items-center justify-between  px-3">
    //         <div className=" flex items-center gap-4">
    //           <div className="flex gap-1.5">
    //             <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
    //             <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
    //             <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             <LockKeyhole size={12} />
    //             <div className="text-xs text-gray-700 font-medium">
    //               {project.name}
    //             </div>
    //           </div>
    //         </div>
    //         <button
    //           onClick={() => navigate(-1)}
    //           className="  hover:text-gray-600 border font-bold hover:bg-red-500 hover:text-white hover:border-none p-1 text-[#242736] cursor-pointer transition"
    //         >
    //           <X size={12} />
    //         </button>
    //       </div>
    //       <p>Lorem*100</p>
    //     </div>


    //   </div>
    // </div>
  );
};

export default ProjectDisplay;
