
import {Link} from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css"
import addIcon from "../../user.png"

function Navbar() {
  return (
    <div className='container'>
      <div className="navbar">
       <Link to="/" className="navbar-menu">Home</Link>
       <Link to="/beverages" className="navbar-menu">Beverages</Link>
       <Link to="/savories" className="navbar-menu">Savories</Link>
       <Link to="/sweets" className="navbar-menu">Sweets</Link>
       <Link to="/gifting" className="navbar-menu">Gifting</Link>
       <Link to="/cookies" className="navbar-menu">Cookies</Link>
       <Link to="/login" className="navbar-menu"><img src={addIcon} className="navbar-user-icon"/></Link>
       </div>
    </div>
  )
}

export default Navbar
