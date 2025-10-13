import { Routes, Route, useLocation } from "react-router-dom";
import PortfolioLayout from "./portfolioLayout/PortfolioLayout";
import Home from "./pages/Home";
import Work from "./pages/WorkPage";
import About from "./pages/About";
import ProjectDisplay from "./pages/ProjectDisplay";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import MouseDot from "./components/MouseDot";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);
    const update = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;


    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [location]);

  return (
    <div className="transition-all">
      <MouseDot />
      <Routes location={background || location}>
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="/work/:id" element={<ProjectDisplay />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
