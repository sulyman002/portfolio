import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../Data/Data";
import { X } from "lucide-react";

const ProjectDisplay = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl shadow-xl max-w-3xl w-[90%] p-6 overflow-hidden">
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
      </div>
    </div>
  );
};

export default ProjectDisplay;
