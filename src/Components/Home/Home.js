
import React from 'react'

import Navbar from '../Navbar/Navbar'

import Bestseller from '../Bestseller/bestseller'
import BestsellerCards from '../BestsellerCards/bestsellercard'

import "./Home.css"



function Home() {
  return (
    <div className="container-head">
      <Navbar />
      <Bestseller />
    </div>
  )
}

export default Home