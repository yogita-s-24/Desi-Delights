import React from 'react'
import Navbar from '../Navbar/Navbar'

import "./SignIn.css"

function SignIn() {
  return (
    <>
    <Navbar/>
    <br/><br/><br/><br/>
    <div class="signup-box">
    <h1>SignIn</h1>
    <h4>It's free and only takes a minute</h4>
    <form>
    <label>First Name</label>
     <input type="text" placeholder=""/>
     <label>Last Name</label>
     <input type="text" placeholder=""/>
     <label>Email</label>
     <input type="email" placeholder=""/>
     <label>Password</label>
     <input type="password" placeholder=""/>
     <label>Confirmed Password</label>
     <input type="password" placeholder=""/>
     <input type="button" value="submit"/>
   
    </form> 
    <p>By clicking the SignIn button,you agree to our<br/>
    <a href="#">Terms and Condition</a> and <a href="#" id="">Policy Privacy</a>
    </p>
    

    <div class="link1">Already have an account?<a class="login-a" href="login">Login here</a>
    </div> 
    </div>  
    
    </>

   
  
  )
}

export default SignIn
