import './Savories.css'
import Navbar from '../Navbar/Navbar'
import addIcons from "../../savouries.webp"
import BestsellerCards from '../BestsellerCards/bestsellercard'

function Savories() {
  return (
    <div class="full-container">
      <Navbar/>
      <img src={addIcons} className='savy-img' />
      <div clas="cards-savy">
        <BestsellerCards name="bhuji sev" btn="add to cart" price="100 rs/kg" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/h/bhujia_1.jpg"/>
        <BestsellerCards name="moong dal" btn="add to cart" price="75rs/kg" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/p/u/punjabi_papad.jpg" />
      
      </div>
    </div>
  )
}

export default Savories