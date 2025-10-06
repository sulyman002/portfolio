
import { Routes, Route } from "react-router-dom";
import PortfolioLayout from "./portfolioLayout/PortfolioLayout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
