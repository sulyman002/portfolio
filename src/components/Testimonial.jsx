import React from "react";

const Testimonial = () => {
  return (
    <div className="relative bg-[#f3f6f5] min-h-[400px] p-10 overflow-hidden">
      {/* curve shape using absolute SVG */}
      <svg
        className="absolute top-0 left-0 w-[200px] h-[200px]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 Q0,0 80,0 L200,0 L200,200 L0,200 Z"
          fill="white"
        />
      </svg>

      {/* content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-[#111]">
          Want to work with me?
        </h2>
        <p className="text-lg text-[#222] mt-2">
          I’d love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
