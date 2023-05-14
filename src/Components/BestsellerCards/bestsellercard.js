import React from 'react'

import "./bestsellercard.css"

function bestsellercard({name,imgUrl,btn,price}) {
  return (
    <div className='bestsellerCard'>
      <img className="img-heading" src={imgUrl} alt="image" />     
      <h2 className="name-header">{name}</h2>
      <h3 className="amount-txt">{price}</h3>
      <button className="card-btn">{btn}</button>
    </div>
  )
}

export default bestsellercard
