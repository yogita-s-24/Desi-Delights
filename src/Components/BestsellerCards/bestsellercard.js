import React from 'react'

import "./bestsellercard.css"

function bestsellercard({name,imgUrl}) {
  return (
    <div className='bestsellerCard'>
      <img className="img-heading" src={imgUrl} alt="image" />     
      <h2 className="name-header">{name}</h2>
    </div>
  )
}

export default bestsellercard
