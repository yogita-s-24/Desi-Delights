
import './Footer.css'
function Footer() {
  return (

    <>
      <div className='container-content'>
        <div className='heading-content'>
          <h5>QUICK LINKS</h5>
          <li>About Us</li>
          <li>Our Process</li>
          <li>Recipes</li>
          <li>Offices</li>
        </div>


        <div className='heading-content'>
          <h5> OUR SERVICES</h5>
          <li>Food Delivery</li>
          <li>Bulk Orders</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <br />
          <h5>VIDEOS</h5>
           
              <a href="/brand"> <li>Brand Videos</li></a>
              <a href="/recipe"> <li>Recipe Videos</li></a>

        </div>
        <div className='heading-content'>
          <h5>OUR POLICIES</h5>
          <li>Shipping</li>
          <li>Payments</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>



        </div>
        <div className='heading-content'>
          <h5>REACH US</h5>
          {/* <br/> */}
          <h5>Email</h5>
          <li>support@desidelights.com</li>
          {/* <br/> */}
          <h5>Call</h5>
          <li>+91 712-2779451</li>
        </div>
        <div className='heading-content'>
          <h5>FOLLOW US</h5>
          <div className="img-grp">
            <li><img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" height="40px" className="img mt-3" /></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" height="40px" className="img mt-3" /></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png" height="40px" className="img mt-3" /></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/3670/3670147.png" height="40px" className="img mt-3" /></li>

          </div>
        </div>
      </div>
       <div className="copy-right text-center">Copyright © 2023 Desi Delights India Pvt Ltd</div>

    </>

  )
}

export default Footer
