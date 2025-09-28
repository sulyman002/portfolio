import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../pages/Nav'
import Footer from '../pages/Footer'

const PortfolioLayout = () => {
  return (
    <div>
        {/* nav section */}
        <Nav />

        {/* Outlet */}
        <Outlet />

        {/* Footer section */}
        <Footer />
        
    </div>
  )
}

export default PortfolioLayout