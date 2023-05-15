import React from 'react'

import "./bestsellercard.css"

function bestsellercard({name,imgUrl,btn,price}) {
  return (
    // <div classNameNameName='bestsellerCard'>
    //   <img classNameNameName="img-heading" src={imgUrl} alt="image" />     
    //   <h2 classNameNameName="name-header">{name}</h2>
    //   <h3 classNameNameName="amount-txt">{price}</h3>
    //   <button classNameNameName="card-btn">{btn}</button>
    // </div>

    <>
    <div className='container text-center'>
    <div className="row row-cols-1 row-cols-md-3 g-4 m-0">
  <div className="col col-menu">
    <div className="card menu-card">
      <img src={imgUrl} className="card-img-top" alt="img"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <button className='btn btn-info'>{btn}</button>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default bestsellercard
