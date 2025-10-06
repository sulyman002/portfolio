import React, { useEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // STEP 1: Letters appear one by one
    tl.fromTo(
      ".letter",
      { opacity: 0, scale: 0.5, y: 20, transformOrigin: "50% 50%" },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.3, // 300ms between letters
      }
    );

    // STEP 2: Stroke reveal/break animation
    tl.to(
      "#word",
      {
        fill: "transparent",
        stroke: "#fff",
        strokeWidth: 1,
        duration: 0.6,
        ease: "power2.inOut",
      },
      "+=0.4"
    )
      .fromTo(
        "#word",
        { strokeDasharray: 800, strokeDashoffset: 800 },
        { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" }
      )
      .to("#word", {
        fill: "#fff",
        stroke: "none",
        duration: 0.6,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <svg viewBox="0 0 500 120" className="w-[400px]">
        <text
         fontFamily="Bitcount Prop Double Ink, system-ui"
          id="word"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="36"
          fill="white"
          fontWeight="bold"
        >
          {Array.from("</SULYMAN>").map((ch, i) => (
            <tspan key={i} className="letter">
              {ch}
            </tspan>
          ))}
        </text>
      </svg>
    </div>
  );
};

export default Loader;
