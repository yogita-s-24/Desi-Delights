import React from 'react'

import "./bestsellercard.css"

function bestsellercard({name,imgUrl,btn,price}) {
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
        <button className='btn btn-info-color'>{btn}</button>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default bestsellercard
