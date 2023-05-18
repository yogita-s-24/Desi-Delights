import React from 'react'

import "./bestsellercard.css"

function bestsellercard({name,imgUrl,btn1,text,btn2,btn,price}) {

  
  return (
    <>
    <div className='container text-center'>
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
  <div className="col col-menu">
    <div className="card menu-card">
      <img src={imgUrl} className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title card-font">{name}</h5>
        <p className="card-text">{price}</p>
        <button className='btn text-center btn-info-color positive'>{btn1}</button>
        <span>{text}</span>
        <button className='btn text-center  btn-info-color negative' >{btn2}</button><br/>
        <button className='btn btn-info-color mt-3' id="buttons" style={{backgroundColor:'red', color:'Black'}}>{btn}</button>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default bestsellercard
