
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css"
// import addIcon from "../../user.png"
import addIcons from "../../logo.jpeg"

function Navbar() {
  return (
    <nav id='navbar-nav'>
      <div className="navbar-heading">
        <div id="logo">
          <img src={addIcons} className="logo" id="icon"/>
        <Link to="/" className="navbar-menu">Home</Link>
        <Link to="/beverages" className="navbar-menu">Beverages</Link>
        <Link to="/savories" className="navbar-menu">Savories</Link>
        <Link to="/sweets" className="navbar-menu">Sweets</Link>
        <Link to="/gifting" className="navbar-menu">Gifting</Link>
        <Link to="/cookies" className="navbar-menu">Cookies</Link>
        <Link to="/login" className="navbar-menu"> Login </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
