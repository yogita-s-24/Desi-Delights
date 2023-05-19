import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import "./SignIn.css"

function SignIn() {
  <Navbar />
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedPassword] = useState('');



  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmedPasswordChange = (e) => {
    setConfirmedPassword(e.target.value);
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
      <div className='signup-box'>
        <h1>SignIn</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>FirstName:</label>
            <input type="firstname" value={firstname} onChange={handleFirstNameChange} required />
          </div>
          <div>
            <label>LastName:</label>
            <input type="lastname" value={lastname} onChange={handleLastNameChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div>
            <label>Confirmed Password:</label>
            <input type="confirmedpassword" value={confirmedpassword} onChange={handleConfirmedPasswordChange} required />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>



        </form>
        <p className='link1'>
          Already have an account?{''}
          <Link to="/login">Login here</Link></p>
      </div>
    </>
  );
}

export default SignIn;



