
import React from 'react'

import Navbar from '../Navbar/Navbar'

import Bestseller from '../Bestseller/bestseller'
import BestsellerCards from '../BestsellerCards/bestsellercard'

import "./Home.css"
import Slider from '../Slider/Slider'



function Home() {
  return (
    <div className="container-head">
      <Navbar />
      <Slider/>
      <Bestseller />
    </div>
  )
}

export default Home