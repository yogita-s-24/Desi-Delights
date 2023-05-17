import React from 'react'
import "./Contactus.css"
function Contactus() {
  return (
 <>
 <div className='container'>
        <h3 className=" text-center m-4">Visit Once Desi Delights Shop</h3>
       <div className="container text-center content ">
        <form action="noaction.php">
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Name "/>
            </div>
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Email Id"/>
            </div>
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Mobile Number"/>
            </div>
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Product"/>
            </div>
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Address"/>
            </div>
            <button className="btn button">Submit</button>
        </form>
    </div>
    </div>
 </>

  )
}

export default Contactus
