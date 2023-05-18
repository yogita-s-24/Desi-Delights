import './Cookies.css'
import Navbar from '../Navbar/Navbar'
import BestsellerCards from '../BestsellerCards/bestsellercard'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'

function Savories() {
  return (
    <>
  <Navbar/>
  <Link to="/">
  <img src="https://www.haldirams.com/media/catalog/tmp/category/cookies_2.jpg"  alt="" className="d-block w-100" id="same" />
  </Link>
<div className='container'>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Jeera Namkeen Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/j/e/jeera_namkeen_cookies_1.jpg" price="₹ 55" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Fruit Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/f/r/fruit_biscuits.jpg" price="₹ 75" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Atta Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/a/aata_cookies_1.jpg" price="₹ 75" btn="Add To Cart"/>
</div>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Chocalate Chip Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chocolate_chip.jpg" price="₹ 75" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Butter Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_butter_3_4.jpg" price="₹ 75" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Pista Badam Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/p/i/pista_badam_cookies_1.jpg" price="₹ 80" btn="Add To Cart"/>
</div>
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="kaju Nankhatai Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_nankhatai_1_3.jpg" price="₹ 90" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Gorus Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/g/o/gorus_cookies_2.jpg" price="₹ 110" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Coconut Cookies" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/o/coconut_cookies.jpg" price="₹ 70" btn="Add To Cart"/>
</div>











</div>
<Footer />
</>

  )
}

export default Savories