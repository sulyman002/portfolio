import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioLayout from "./portfolioLayout/PortfolioLayout";
import Home from "./pages/Home";
import Loader from "./pages/Loader.jsx";

const App = () => {

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {

    const hasVisited = localStorage.getItem("visted");

    if(!hasVisited) {
      setShowLoader(true)
      const loaderTimer =  setTimeout(()=> {
        setShowLoader(false)

    }, 5000)
    }

   
  
    return () => {
      
    }
  }, [])
  
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
