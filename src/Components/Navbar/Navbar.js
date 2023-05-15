
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css"
// import addIcon from "../../user.png"
import addIcons from "../../logo.jpeg"

function Navbar() {
  return (
    <>
    {/* // <nav id='navbar-nav'>
    //   <div classNameName="navbar-heading">
    //     <div id="logo">
    //       <img src={addIcons} classNameName="logo" id="icon"/>
    //     <Link to="/" classNameName="navbar-menu">Home</Link>
    //     <Link to="/beverages" classNameName="navbar-menu">Beverages</Link>
    //     <Link to="/savories" classNameName="navbar-menu">Savories</Link>
    //     <Link to="/sweets" classNameName="navbar-menu">Sweets</Link>
    //     <Link to="/gifting" classNameName="navbar-menu">Gifting</Link>
    //     <Link to="/cookies" classNameName="navbar-menu">Cookies</Link>
    //     <Link to="/login" classNameName="navbar-menu"> Login </Link>
    //     </div>

    //   </div>
    // </nav> */}

<nav className="navbar navbar-expand-lg bg-body-tertiary navbar-nav" id="nav">
<div className="container-fluid navbar-bg">
  <Link  className="navbar-brand" to="/">Desi Delights</Link >
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/">Home</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/beverages">Beverages</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/savories"> Savories</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/sweet">Sweets</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/gifting">Gifting</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active" aria-current="page" to="/cookies">Cookies</Link >
      </li>
      <li className="nav-item dropdown">
        <Link  className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Videos
        </Link >
        <ul className="dropdown-menu">
          <li><Link  className="dropdown-item" to="/recipe">Recipe Video</Link ></li>
          <li><Link  className="dropdown-item" to="/brand">Brand Video</Link ></li>
        </ul>
      </li>
      <li className="nav-item">
        <Link  className="nav-link active login" aria-current="page" to="/login">Login</Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link active signin" aria-current="page" to="/singin">SignIn</Link >
      </li>
     
    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
</>
  )
}

export default Navbar
