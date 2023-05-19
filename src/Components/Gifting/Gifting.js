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
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Bhoondi bhujia" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/o/boondi_1.jpg" price="₹ 600" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Masala peanuats" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/masala_peanuts.jpg" price="₹ 450" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Salted peanuats" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/p/a/pack_of_1.jpg" price="₹ 325" btn="Add To Cart"/>
</div>
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="All in One" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/l/all_in_one_4.jpg" price="₹ 250" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Aloo Bhujia" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/l/aloo_bhujiya.jpg" price="₹ 425" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Chana choor" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chana_choor_7.jpg" price="₹ 325" btn="Add To Cart"/>
</div>
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Chatpata Dal" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chatpata_dal_2.jpg" price="₹ 240" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Light Chiwada" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/l/i/lite_chiwda_4.jpg" price="₹ 130" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Farali Chiwada" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/0/3/03_1_.jpg" price="₹ 325" btn="Add To Cart"/>
</div>


</div>
<Footer />
</>
  )
}

export default Gifting