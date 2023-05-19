import './Contactus.css'
import Navbar from '../Navbar/Navbar'
import BestsellerCards from '../BestsellerCards/bestsellercard'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'

function Contactus() {
  return (
    <>
  <Navbar/>
  <Link to="/">
  <img src="https://th.bing.com/th/id/R.656a9660a2e31ddb51f8c8ec4e22c4d6?rik=Ay9ELNpr20qjzw&riu=http%3a%2f%2fwalkietalkiesoftware.com%2fupload%2ftid%2f20200622%2f39b57bf51aff041677f10c29a824546b.jpg&ehk=fqgUeXK9cZNEKVPE96QEh8HW%2fuFwnPYyM6h9oPsopv0%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" id="same" />
  </Link>
<div className='contactpage'>
  <h2 className='text-center'>Contact us</h2>
<form class="row g-3">
  <div class="col-md-7">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder='john doe' />
  </div>
  <div class="col-7">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-7">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-7">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-7">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>MAHARASHTRA</option>
      <option>GUJRAT</option>
      <option>KARNATAKA</option><option>ANDHRAPRADESH</option><option>NAGALAND</option>
      <option>MANIPUR</option><option>DELHI</option>
    </select>
  </div>
  <div class="col-md-7">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-warning">Sign in</button>
  </div>
</form>
<img src="https://miro.medium.com/max/1200/1*Uxs8D4kcQ2a_RLsubOrjIQ.png" className='imgin'/>


</div>
<Footer />
</>

  )
}

export default Contactus