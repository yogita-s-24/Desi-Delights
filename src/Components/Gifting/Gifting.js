import React from 'react'
import './Gifting.css'
import Navbar from '../Navbar/Navbar'
import BestsellerCards from '../BestsellerCards/bestsellercard'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'

function Gifting() {
  return (
    <>
    <Navbar/>
  <Link to="/">
  <img src="https://www.haldirams.com/media/catalog/tmp/category/gifting_1.jpg" className="d-block w-100" id="same" />
  </Link>
<div className='container'>
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Karopati bhujia" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/karodpati_1.jpg" price="₹ 500" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Marvari bhujia" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/marwari.jpg" price="₹ 550" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="bikneri Bhujia" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/i/bikanari.jpg" price="₹ 225" btn="Add To Cart"/>
</div>


</div>
<Footer />
</>
  )
}

export default Gifting