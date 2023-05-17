import React from 'react'
import './Contactus.css'
function Contactus() {
    return (
        <div className='container main-container'>
            <div className="row ContBord col-lg-10 my-5 mx-5">
                <div className="ContactUS col-lg-5 m-3 p-3">
                    <h2 className='text-center'> Contact Us</h2>
                    <font className="ContactUSInfo">
                    Welcome to Desi Delights Sweet Shop, where every bite is a journey 
                    of flavor and tradition! We value your feedback, inquiries, and suggestions.
                     Please don't hesitate to reach out to us through any of the following channels:
          <br/>
         
        </font>
        <br/><br/>
        <div className="InfoIcon">
          <img src="./Images/HomePage/ContIcon.png" className="ContIcon"/>
          <font>
            (555) 123-4567
          </font>
        </div>
        <div className="InfoIcon">
          <img src="./Images/HomePage/EmailIcon.png" className="ContIcon"/>
          <font>
            info@desidelights.com
          </font>
        </div>
      </div>
      <div className="ContForm col-lg-3 col-sm-8 col-md-8 col-xs-8 ms-5 me-5">
        <label className="Contlabel ms-5" for="inputname">Name:</label><br/>
        <input type="Name" id="inputname" Placeholder="Please Enter Your Name" required
          className="ContInput col-lg-12  col-sm-8 col-md-8 col-xs-8 ms-5 me-5"/>
        <br/><br/>
        <label className="Contlabel ms-5" for="inputname">City:</label><br/>
        <input type="Name" id="inputname" Placeholder="Please Enter Your Name" required
          className="ContInput col-lg-12  col-sm-8 col-md-8 col-xs-8 ms-5 me-5"/>
        <br/><br/>
        <label className="Contlabel ms-5" for="inputname">Wedding Type:</label><br/>
        <select className="ContInput col-lg-12  col-sm-8 col-md-8 col-xs-8 ms-5 me-5">
          <option className="ContInput">
            Choose Your Type
          </option>
          <option className="ContInput">
            Local
          </option>
          <option className="ContInput">
            Destination Wedding
          </option>
          <option className="ContInput">
            Prime
          </option>
          <option className="ContInput">
            Supreme
          </option>
        </select>
        <br/><br/>
        <label className="Contlabel ms-5" for="inputname">Message:</label><br/>
        <input type="Message" id="inputname" Placeholder="Type Of Wedding You want" required
          className="ContInput2 col-lg-12  col-sm-8 col-md-8 col-xs-8 ms-5 me-5"/>
        <br/>
        <div className="SubmitDiv mt-3 ms-3 mb-5">
          <button className="SubmitBTN col-lg-6">
            Cheers....!
          </button>
        </div>




                </div>
            </div>

            </div>
            )
}

            export default Contactus
