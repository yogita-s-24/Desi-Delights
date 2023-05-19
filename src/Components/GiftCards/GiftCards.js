import React,{useState} from "react";
import "./GiftCard.css"

function GiftCards({ imgurl, name, btn1, text, btn2, price, btn }) {
    const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="container text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col col-menu">
            <div className="card menu-card">
              <img src={imgurl} className="card-img-top" alt="img" />
              <div className="card-body">
                <h5 className="card-title card-font"> {name} </h5>
                <p className="card-text"> {price} </p>
                <button className='btn text-center  btn-info-color positive' onClick={() => setQuantity(quantity + 1)}>{btn1}</button>
                <span className='text-center'>{quantity}</span>
                <button type="button" className="btn text-center btn-info-color negative" onClick={() => {
                  if (quantity == 0) {
                    alert("Quantity can be 1")
                  }
                  else {
                    setQuantity(quantity - 1)
                  }
                }}>-</button><br />
                <button className="btn btn-info-color"> {btn} </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GiftCards;
