import React from 'react'
import "./Bestseller.css"
import BestsellerCards from '../BestsellerCards/bestsellercard'

function Bestseller() {
    return (
<>
<div className='container'>
<h2 class="mt-5 text-center heading-bestseller">Bestsellers</h2>
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg" price="₹ 270" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Moti Chur Laddu" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/o/moti-choor-ladoo-250-frontv1.jpg" price="₹ 175" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Bhujia Sev(600 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/h/bhujia_sev_600g.jpg" price="₹ 215" btn="Add To Cart"/>
</div>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Son Papdi(300 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chocolate_soan_papdi-compressor_2.jpg" price="₹ 100" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Assorted Dry Fruit" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/s/assorted-dry-fruit-fv1.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Fancy Dry fruit Gift Box(WW)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/1/_/1_72.jpg" price="₹ 300" btn="Add To Cart"/>
</div>


<h2 class="mt-5 text-center heading-bestseller">New Arrivals</h2>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Fruit Delight(Berry Blast)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/f/r/fruit_delight_front.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Vanila Milkshake -(180ml - Pack of 10)  " imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/v/a/vanila_milk_shake.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/2/_/2_4_6.jpg" price="₹ 300" btn="Add To Cart"/>
</div>

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
