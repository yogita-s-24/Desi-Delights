 import './Beverages.css'
import React from 'react'
 import Navbar from '../Navbar/Navbar'
 import BeveragesCards from '../BeveragesCards/BeveragesCards'
 import Footer from '../Footer/Footer'
   function Beverages() {
  return (
    <> 
     <Navbar/>
     <img src='https://www.haldirams.com/media/catalog/tmp/category/beverages_1_.jpg'alt=''/>
    <div className='container'> 
    <h2 className="mt-5 text-center heading-bestseller">Beverages</h2>

      <div className='product-group p-5 m-5'>
         <BeveragesCards className='product-menu' imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/a/kala_khatta_1.jpg'name='Kala Khatta Squash (750 ml)' price='₹175'btn1='+' text='0'btn2='-' btn="Add To Cart"/>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/l/e/lemon_squash-removebg-preview.jpg'name='Lemon Squash (750 ml)' price='₹175'btn1='+' text='0'btn2='-' btn="Add To Cart"/>
         <BeveragesCards className='product-menu' imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/o/r/orange-removebg-preview.jpg'name='Orange Squash (750 ml)'price='₹175'btn1='+' text='0'btn2='-' btn="Add To Cart"/>
      </div>
    <div className='product-group p-5 m-5'> 
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/p/i/pineapple-removebg-preview__1_.jpg'name='Pineapple Squash (750 ml)'price='₹175'btn1='+' text='0'btn2='-' btn="Add To Cart"/>
           <BeveragesCards className='product-menu' imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/h/khus-removebg-preview.jpg'name='Khus Sharbat (750 ml)'price='₹175' btn1='+' text='0'btn2='-'btn="Add To Cart"/>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/r/o/rose-removebg-preview_1.jpg'name='Rose Sharbat (750 ml)'price='₹175'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
    </div>
 
    <div className='product-group p-5 m-5'>
         <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/mango_panna-removebg-preview.jpg'name='Mango Panna Squash (750 ml)'price='₹175'btn1='+' text='0'btn2='-' btn="Add To Cart"/>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/matka_jhatka.jpg'name='Matka Jhatka Chaas - (180ml - Pack of 15)'price='₹150'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
         <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chocolate_milk.jpg'name='Thanda Funda - Chocolate Milk (180ml - Pack of 12)'btn1='+' text='0'btn2='-'price='₹240'btn="Add To Cart"/>
    </div>
     <div className='product-group p-5 m-5'>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/f/r/french_vanilla.jpg'name='Thanda Funda - French Vanilla Milk (180ml - Pack of 12)'price='₹240'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
           <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/0/1/01_1_.jpg'name='Thanda Funda - Badam Thandai Milk (180ml - Pack of 12)'price='₹240'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/r/o/rose_milk.jpg'name='Thanda Funda - Rose Flavoured Milk (180ml - Pack of 12)'price='₹240'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
     </div>
      <div className='product-group p-5 m-5'>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/k/e/kesar_milk.jpg'name='Thanda Funda - Kesar Milk (180ml - Pack of 12)'price=' ₹240'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
           <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/l/a/lassi_6.jpg'name='Classic Lassi (180ml - Pack of 15)'price='₹249'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/b/a/badam_kesar_milk_1.jpg'name='Kesar Badam Milk (180ml - Pack of 15)'btn1='+' text='0'btn2='-'price='₹450'btn="Add To Cart"/>
     </div>
     <div className='product-group p-5 m-5'>
         <BeveragesCards className='product-menu' imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/m/a/mango_lassi.jpg'name='Mango Lassi (180ml - Pack of 15)'price='₹375'btn1='+' text='0'btn2='-'btn="Add To Cart"/>
          <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/v/a/vanila_milk_shake.jpg'name='Vanila Milkshake - (180ml - Pack of 10)'btn1='+' text='0'btn2='-'price='₹300'btn="Add To Cart"/>
         <BeveragesCards className='product-menu'imgurl='https://www.haldirams.com/media/catalog/product/cache/d792111afa4c25819db06da8dd2e361f/c/h/chocolate_milk.jpg'name='Thanda Funda - Chocolate Milk (180ml - Pack of 12)'btn1='+' text='0'btn2='-'price='₹240'btn="Add To Cart"/>
     </div>
     
     </div>
     <Footer/>
   </>
  )
}

export default Beverages