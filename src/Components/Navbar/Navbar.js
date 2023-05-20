
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css"
// import addIcon from "../../user.png"
import addIcons from "../../logo.jpeg"

function Navbar() {
  return (
    <>

<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top " id="nav">
<div className="container-fluid navbar-bg">
  <Link  className="navbar-brand" to="/" style={{fontWeight:'400',fontSize:'30px'}}>Desi Delights</Link >
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/">Home</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active item-color" id="item" aria-current="page" to="/beverages">Beverages</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/savories"> Savories</Link >
      </li>
      <li className="nav-item ">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/sweets">Sweets</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/gifting">Gifting</Link >
      </li>
      <li className="nav-item ">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/cookies">Cookies</Link >
      </li>
      <li className="nav-item ">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/aboutus">About Us</Link >
      </li>
     
      <li className="nav-item ">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/login">Login</Link >
      </li>
      <li className="nav-item ">
        <Link  className="nav-link active item-color" id="item"  aria-current="page" to="/signin">SignIn</Link >
      </li>
     
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark" type="submit" style={{height:'40px', width:"70px",marginTop:'6px'}}>Search</button>
    </form>
  </div>
</div>
</nav>
</>
  )
}

export default Navbar
