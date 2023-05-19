import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import './Aboutcard.css'


function Aboutcard({img,name,para,hover,icon1,icon2,icon3}) {

  return (
    <>
    
    <div className='container text-center'>
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col col-menu">
    <div className="card menu-card">
      <img src={img} className="card-image" alt="img"/>
      <div className="card-bodynew">{hover}
        <h5 className="card-titlenew">{name}</h5>
        <p className="card-description">{para}</p>
        
        <img src={icon1} className="card-textnew"/>
        <img src={icon2} className="card-textnew"/>
        <img src={icon3} className="card-textnew"/>

        
      </div>
    </div>
  </div>
</div>
</div>
    </>

  )
}

export default Aboutcard