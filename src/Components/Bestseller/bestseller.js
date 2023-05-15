import React from 'react'
import "./Bestseller.css"
import BestsellerCards from '../BestsellerCards/bestsellercard'

function Bestseller() {
    return (
<>
<div className='container'>
<h2 class="mt-5 text-center heading-bestseller">Bestsellers</h2>
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/o/moti-choor-ladoo-250-frontv1.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/h/bhujia_sev_600g.jpg" price="₹ 300" btn="Add To Cart"/>
</div>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/o/moti-choor-ladoo-250-frontv1.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/h/bhujia_sev_600g.jpg" price="₹ 300" btn="Add To Cart"/>
</div>


<h2 class="mt-5 text-center heading-bestseller">New Arrivals</h2>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/f/r/fruit_delight_front.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/v/a/vanila_milk_shake.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/2/_/2_4_6.jpg" price="₹ 300" btn="Add To Cart"/>
</div>

<h2 class="mt-5 text-center heading-bestseller">Categories</h2>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg" price="₹ 300" btn="Add To Cart"/>
</div>

</div>
</>
    )
}

export default Bestseller
