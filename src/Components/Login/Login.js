import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import "./Login.css"
import Footer from '../Footer/Footer'

function Login() {
  <Navbar />

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
      <Navbar />
      <br /><br /><br /><br />
      <div className='login-box'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>

        </form>
        <p className='link2'>
          Already have an account?{''}
          <Link to="/signin">SignIn here</Link></p>
      </div>
      <br/><br/><br/><br/>
      <Footer/>
    </>
  );
}

export default Login;



