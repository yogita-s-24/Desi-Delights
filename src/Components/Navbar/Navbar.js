
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css"
// import addIcon from "../../user.png"
import addIcons from "../../logo.jpeg"

function Navbar() {
  return (
    <>
    {/* // <nav id='navbar-nav'>
    //   <div className="navbar-heading">
    //     <div id="logo">
    //       <img src={addIcons} className="logo" id="icon"/>
    //     <Link to="/" className="navbar-menu">Home</Link>
    //     <Link to="/beverages" className="navbar-menu">Beverages</Link>
    //     <Link to="/savories" className="navbar-menu">Savories</Link>
    //     <Link to="/sweets" className="navbar-menu">Sweets</Link>
    //     <Link to="/gifting" className="navbar-menu">Gifting</Link>
    //     <Link to="/cookies" className="navbar-menu">Cookies</Link>
    //     <Link to="/login" className="navbar-menu"> Login </Link>
    //     </div>

    //   </div>
    // </nav> */}

<nav class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
<div class="container-fluid navbar-bg">
  <Link  class="navbar-brand" to="#">Desi Delights</Link >
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link  class="nav-link active" aria-current="page" to="/">Home</Link >
      </li>
      <li class="nav-item">
        <Link  class="nav-link active" aria-current="page" to="/beverages">Beverages</Link >
      </li>
      <li class="nav-item">
        <Link  class="nav-link active" aria-current="page" to="/savories"> Savories</Link >
      </li>
      <li class="nav-item">
        <Link  class="nav-link active" aria-current="page" to="/sweet">Sweets</Link >
      </li>
      <li class="nav-item">
        <Link  class="nav-link active" aria-current="page" to="/gifting">Gifting</Link >
      </li>
      <li class="nav-item">
        <Link  class="nav-link active" aria-current="page" to="/cookies">Cookies</Link >
      </li>
      <li class="nav-item dropdown">
        <Link  class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Videos
        </Link >
        <ul class="dropdown-menu">
          <li><Link  class="dropdown-item" to="/recipe">Recipe Video</Link ></li>
          <li><Link  class="dropdown-item" to="#brand">Brand Video</Link ></li>
        </ul>
      </li>
      <li class="nav-item">
        <Link  class="nav-link active login" aria-current="page" to="/login">Login</Link >
      </li>
      <li class="nav-item">
        <Link  class="nav-link active signin" aria-current="page" to="/singin">SignIn</Link >
      </li>
     
    </ul>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-dark" type="submit">Search</button>
    </form>
  </div>
</div>
</nav>
</>
  )
}

export default Navbar
