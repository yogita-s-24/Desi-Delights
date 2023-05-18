import React from 'react'
import './Aboutcard.css'

function Aboutcard({img,name,icon1,icon2,icon3}) {

  return (
    <>
    
    <div className='container text-center'>
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col col-menu">
    <div className="card menu-card">
      <img src={img} className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title card-font">{name}</h5>
        <img src={icon1} className="card-text"/>
        <img src={icon2} className="card-text"/>
        <img src={icon3} className="card-text"/>
        
      </div>
    </div>
  </div>
</div>
</div>
    </>

  )
}

export default Aboutcard