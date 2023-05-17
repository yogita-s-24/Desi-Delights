
import React from 'react'

import "./Home.css"

import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import Bestseller from '../Bestseller/bestseller'
import BestsellerCards from '../BestsellerCards/bestsellercard'
import Contactus from '../Contactus/Contactus'




function Home() {
  return (
    <div className="container-head">
      <Navbar />
      <Slider/>
      <Bestseller />
      <Contactus/>
    </div>
  )
}

export default Home