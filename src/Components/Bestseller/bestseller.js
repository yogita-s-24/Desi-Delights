import React from 'react'
import "./Bestseller.css"
import BestsellerCards from '../BestsellerCards/bestsellercard'

function Bestseller() {
    return (
<>
<div className='container'>
<h2 class="text-center heading-bestseller mt-2">Bestsellers</h2>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Kaju Katli" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kaju_katli_2_2.jpg" price="₹ 270" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Moti Chur Laddu" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/o/moti-choor-ladoo-250-frontv1.jpg" price="₹ 175" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Bhujia Sev(600 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/h/bhujia_sev_600g.jpg" price="₹ 215" btn="Add To Cart"/>
</div>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Son Papdi(300 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chocolate_soan_papdi-compressor_2.jpg" price="₹ 100" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Assorted Dry Fruit" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/s/assorted-dry-fruit-fv1.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Fancy Dry fruit Gift Box(WW)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/1/_/1_72.jpg" price="₹ 375" btn="Add To Cart"/>
</div>


<h2 class="text-center heading-bestseller">New Arrivals</h2>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Fruit Delight(Berry Blast)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/f/r/fruit_delight_front.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Red Chilli Papad(200gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/i/m/img-20230313-wa0008.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Mango Drink - (150ml - Pack of 20)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/2/_/2_4_6.jpg" price="₹ 200" btn="Add To Cart"/>
</div>

<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Classic Lassi - (180ml - Pack 0f 15)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/l/a/lassi_6.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Vanila Milkshake -(180ml - Pack of 10)  " imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/v/a/vanila_milk_shake.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Matka Jhatka Chaas - (180ml - Pack of 15)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/matka_jhatka.jpg" price="₹ 300" btn="Add To Cart"/>
</div>

<h2 class="text-center heading-bestseller">Categories</h2>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Assorted Chocolates(small)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/s/m/small_choco.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Almold Jar" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/l/almonds1.jpg" price="₹ 355" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Dry Fruits Tokani(400gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/1/f/1f_2.jpg" price="₹ 300" btn="Add To Cart"/>
</div>

<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Straberry Bites" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/s/t/strawberry_bites.jpg" price="₹ 545" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Karodpati Bhujia(125gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/karodpati_1.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Masala Peanuts(200gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/masala_peanuts.jpg" price="₹ 300" btn="Add To Cart"/>
</div>

</div>
</>
    )
}

export default Bestseller
