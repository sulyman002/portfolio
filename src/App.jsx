
import { Routes, Route } from "react-router-dom";
import PortfolioLayout from "./portfolioLayout/PortfolioLayout";
import Home from "./pages/Home";


const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
