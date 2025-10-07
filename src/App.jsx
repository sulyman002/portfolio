import { Routes, Route, useLocation } from "react-router-dom";
import PortfolioLayout from "./portfolioLayout/PortfolioLayout";
import Home from "./pages/Home";
import Work from "./pages/WorkPage";
import About from "./pages/About";
import ProjectDisplay from "./pages/ProjectDisplay";

const App = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <div className="transition-all">
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
