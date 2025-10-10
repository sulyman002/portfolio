import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ResumePage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      sectionsRef.current.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            duration: 0.8,
            ease: "power2.out",
          }
        );
      });
    }
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // replace with your actual PDF path
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6 md:px-20">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Your Name</h1>
        <p className="text-lg text-gray-400">Frontend Developer | GIS Specialist</p>
      </header>

      {/* Timeline Section */}
      <div className="space-y-20">
        {/* Education Timeline */}
        <section ref={addToRefs}>
          <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
          <div className="relative border-l-2 border-gray-700 md:border-none md:grid md:grid-cols-2 md:gap-8">
            {[
              {
                title: "B.Sc. in Geography (GIS Option)",
                subtitle: "Lead City University, Ibadan",
                date: "2022 - Present",
              },
              {
                title: "Frontend Development Certification",
                subtitle: "FreeCodeCamp / Udemy",
                date: "2024",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative mb-10 md:mb-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                }`}
              >
                <div className="absolute left-[-7px] md:left-auto md:translate-x-[-50%] md:top-2 w-4 h-4 bg-gray-100 rounded-full border-2 border-gray-700"></div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.subtitle}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section ref={addToRefs}>
          <h2 className="text-3xl font-semibold mb-8 text-center">Experience</h2>
          <div className="relative border-l-2 border-gray-700 md:border-none md:grid md:grid-cols-2 md:gap-8">
            {[
              {
                title: "GIS Intern",
                subtitle: "Technologies",
                date: "June 2025 - August 2025",
                description:
                  "Digitized building footprints using ArcGIS Pro, performed  management and thematic map creation.",
              },
              {
                title: "Frontend Developer (Freelance)",
                subtitle: "Self-employed",
                date: "2024 - Present",
                description:
                  "Developed responsive websites with React and Tailwind CSS, integrating animations and user interactivity.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`relative mb-10 md:mb-0 ${
                  i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                }`}
              >
                <div className="absolute left-[-7px] md:left-auto md:translate-x-[-50%] md:top-2 w-4 h-4 bg-gray-100 rounded-full border-2 border-gray-700"></div>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.subtitle}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Download Resume Button */}
      <div className="text-center mt-20">
        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
        >
          Download Resume (PDF)
        </button>
      </div>
    </div>
  );
};

export default ResumePage;