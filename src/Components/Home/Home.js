import React from 'react'
import "./Home.css"

import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Bestseller from '../Bestseller/bestseller'
import BestsellerCards from '../BestsellerCards/Bestsellercard'
import Footer from '../Footer/Footer'




function Home() {
  return (
    <div className="container-head">
      <Navbar />
      <Slider/>
      <Bestseller />   
      <Footer/>
    </div>
  )
}

export default Home