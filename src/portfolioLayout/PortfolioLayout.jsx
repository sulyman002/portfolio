import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../pages/Nav";
import Footer from "../pages/Footer";
import gsap from "gsap";

const PortfolioLayout = () => {
  useEffect(() => {
    const visited = localStorage.getItem("visited");

    if (visited) {
    
      gsap.set("#loader-bg", { display: "none" });
      gsap.set("#landing", { opacity: 1 });
      return;
    } else {
      localStorage.setItem("visited", true);
    }

    const timeline = gsap.timeline();

    timeline
     
      .fromTo(
        "#logo",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "back.out(1.7)" }
      )
      // Text stroke → fill
      .to(
        "#name",
        {
          fill: "transparent",
          stroke: "#fff",
          strokeWidth: 2,
          strokeDasharray: "0 30%",
          strokeDashoffset: "25%",
        })
        .to("#name", {
          fill: "transparent",
          stroke: "#fff",
          strokeWidth: 3,
        })
        .to("#name", {
          fill: "#fff",
          duration: 4,
          stroke: "transparent",
          strokeWidth: 0,
          strokeDashoffset: "-25%",
          strokeDasharray: "30% 0"
        })
       
      
      // Logo moves to corner
      .to("#logo", {
        scale: 0.5,
        x: "-40vh",
        y: "-40vh",
        duration: 0.8,
        ease: "power2.inOut",
      })
      // Loader bg fade
      .to("#loader-bg", { backgroundColor: "#ffffff", duration: 1 }, "-=0.5")
      // Show landing content
      .set("#landing", { opacity: 1 })
      // Animate hero text
      .from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
      })
      // Animate CTA
      .from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
      })
      // Animate hero image
      .from(".hero-img", {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
      })
      // Finally hide loader so landing is visible
      .to("#loader-bg", { autoAlpha: 0, display: "none", duration: 0.3 });
  }, []);
  return (
    <div>
      {/* Loader */}
      <div
        id="loader-bg"
        className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50"
      >
        <h1 id="logo" className="text-5xl font-bold">
          O/S
        </h1>
        <svg id="name" viewBox="0 0 400 160" className="w-full h-40">
          <text
            x="50%"
            y="50%"
            dy=".32em"
            textAnchor="middle"
            fontSize="3rem"
            strokeWidth="2"
            fontWeight={700}
            fill="transparent" // Tailwind's blue-900 hex
          >
            {"</SULYMAN>"}
          </text>
        </svg>
        {/* <div id="loader" className="flex flex-col items-center">
         
          <p id="name" className="mt-2 text-lg tracking-widest">
            {"</Sulaiman Oyedele>"}
          </p>
        </div> */}
      </div>
      <section
        id="landing"
        className="opacity-0 flex flex-col items-center justify-center min-h-screen bg-white text-[#0D1C2E]"
      >
        <h1 className="hero-title text-4xl font-bold">Hi, I’m Sulaiman</h1>
        <h2 className="hero-title text-xl mt-2">Frontend Developer</h2>
        <div className="flex gap-4 mt-6">
          <button className="hero-cta px-6 py-2 bg-[#0D1C2E] text-white rounded-lg">
            View Projects
          </button>
          <button className="hero-cta px-6 py-2 border border-[#0D1C2E] rounded-lg">
            Contact Me
          </button>
        </div>
        <div className="hero-img mt-10 w-40 h-40 rounded-full bg-gray-300"></div>
      </section>
      {/* nav section */}
      <Nav />

      {/* Outlet */}
      <Outlet />

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default PortfolioLayout;
