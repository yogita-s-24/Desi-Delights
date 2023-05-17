import './Savories.css'
import Navbar from '../Navbar/Navbar'
import BestsellerCards from '../BestsellerCards/bestsellercard'

function Savories() {
  return (
    <>
  <Navbar/>
  <img src="https://www.haldirams.com/media/catalog/tmp/category/savouries.jpg" className="img-savier" id="same" />
<div className='container'>
<h2 class="mt-5 text-center heading-bestseller">NAMKEEN</h2>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Bhuji shev" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/h/bhujiya_sev_200_front.jpg" price="₹ 55" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Bhel puri" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/h/bhel_puri.jpg" price="₹ 55" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Aloo Bhujia" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/a/l/aloo_bhujia_1kg_new_pack.jpeg" price="₹ 220" btn="Add To Cart"/>
</div>

<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Moong Dal" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/o/moong-dal-1-kg.jpg" price="₹ 220" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Vermiceil" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/v/e/vermicellii-400g-front.jpg" price="₹ 100" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Khatta Meetha" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/h/khatta_mitha_200_front.jpeg" price="₹ 325" btn="Add To Cart"/>
</div>
<div className='product-group p-5 m-5'>
<BestsellerCards className="product-menu" name="Lemon Bhel(200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/l/e/lemon_bhel_front_200gm.jpg" price="₹ 47" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Punjabi tadka(200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/p/u/punjabi_tadka_front.jpg" price="₹ 100" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Ratlami shev(200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/i/m/img-20220903-wa0002.jpg" price="₹ 42" btn="Add To Cart"/>
</div>


<h2 class="mt-5 text-center heading-bestseller">Papad</h2>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Coin papad(1 kg)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/p/cplarge1.jpg" price="₹ 235" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Bikneri papad" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/p/bpsmall1.jpg" price="₹ 245" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Punjabi papad" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/p/u/punjabi_papad.jpg" price="₹ 265" btn="Add To Cart"/>
</div>

<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Udad Papad(200gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/u/d/udadsmall2.jpg" price="₹ 75" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Red Chilli Papad(200gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/i/m/img-20230313-wa0008.jpg" price="₹ 300" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Bikneri katran papad(1 kg)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/k/bklarge1.jpg" price="₹ 225" btn="Add To Cart"/>
</div>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Moong Papad" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/o/moongpapadsmall1.jpg" price="₹ 335" btn="Add To Cart"/>
</div>

<h2 class="mt-5 text-center heading-bestseller">Mathri</h2>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Kerala Sticks (200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/karela_stick.jpg" price="₹ 65" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Chai Puri(200 gms" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chai_puri.jpg" price="₹ 85" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Tit Bit (200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/t/i/titbit.jpg" price="₹ 95" btn="Add To Cart"/>
</div>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Namkeen Tit Bit (200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chai_k_saath_ntb.jpg" price="₹ 65" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Masala sticks(200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chai_k_saath_ms.jpg" price="₹  75" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Namkeen Sticks (200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chai_k_saath_ns.jpg" price="₹ 45" btn="Add To Cart"/>
</div>
<div className='product-group  p-5 m-5'>
<BestsellerCards className="product-menu" name="Mathri (200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/mathari.jpg" price="₹ 85" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Jira puri(200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/j/e/jeera_puri.jpg" price="₹  75" btn="Add To Cart"/>
<BestsellerCards className="product-menu" name="Methi Sticks (200 gms)" imgUrl="https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/e/methi_sticks.jpg" price="₹ 60" btn="Add To Cart"/>
</div>

</div>
</>
  )
}

export default Savories