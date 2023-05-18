
import React from 'react'
import Navbar from '../Navbar/Navbar'

import "./Login.css"

function Login() {
  return (
    <>
    <Navbar/>
    <br/><br/><br/><br/>
    <div class="login-box">
    <h1>Login</h1>
   
    <form>
    <label>Email</label>
     <input type="email" placeholder=""/>
     <label>Password</label>
     <input type="password" placeholder=""/>
     <input type="button" value="submit"/>
   </form> 
    
    <div class="link2">Not have an account?<a class="signup-a" href="signIn">SignIn here</a>  
    </div>
    </div>
    </>

   
  
  )
}

export default Login
