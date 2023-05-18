import React from 'react'
import Navbar from '../Navbar/Navbar'
import Aboutcard from '../Aboutcard/Aboutcard'
import './Aboutus.css'
// import Footer from '../Footer/Footer'


function Aboutus() {
  return (
    <div>
      <Navbar/>
      
      <div className='contentgroup'>
      <Aboutcard className='cardsgroup' img='https://avatars.githubusercontent.com/u/124052924?v=4' name='Yogita Shete' icon1='https://cdn-icons-png.flaticon.com/128/3670/3670124.png' icon2='https://cdn-icons-png.flaticon.com/128/3955/3955024.png' icon3='https://cdn-icons-png.flaticon.com/128/3670/3670127.png' />
      <Aboutcard className='cardsgroup' img='https://avatars.githubusercontent.com/u/124052924?v=4' name='Yogita Shete' icon1='https://cdn-icons-png.flaticon.com/128/3670/3670124.png' icon2='https://cdn-icons-png.flaticon.com/128/3955/3955024.png' icon3='https://cdn-icons-png.flaticon.com/128/3670/3670127.png' />
      <Aboutcard className='cardsgroup' img='https://avatars.githubusercontent.com/u/124052924?v=4' name='Yogita Shete' icon1='https://cdn-icons-png.flaticon.com/128/3670/3670124.png' icon2='https://cdn-icons-png.flaticon.com/128/3955/3955024.png' icon3='https://cdn-icons-png.flaticon.com/128/3670/3670127.png' />
      
      </div>


     
    
    </div>
    
  )
}

export default Aboutus