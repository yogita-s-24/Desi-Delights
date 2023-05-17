import React from 'react';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Bestseller from './Components/Bestseller/bestseller';
import BestsellerCards from './Components/BestsellerCards/bestsellercard';
import Slider from './Components/Slider/Slider'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './Components/Home/Home';
import Beverages from './Components/Beverages/Beverages';
import Savories from './Components/Savories/Savories';
import Sweets from './Components/Sweets/Sweets';
import Gifting from './Components/Gifting/Gifting';
import Cookies from './Components/Cookies/Cookies';
import Video from './Components/Video/Video';
import Login from './Components/Login/Login';
import SignIn from './Components/SignIn/SignIn';


function App() {

    return ( 
  
        < BrowserRouter >
            < Routes >
                <Route path="/" element={< Home />}/> 
                <Route path="/beverages" element={< Beverages />} />
                 <Route path="/savories" element={< Savories />}  /> 
                < Route path="/sweets" element={< Sweets />} /> 
                < Route path="/gifting" element={< Gifting />}/>
                 < Route path="/cookies" element={< Cookies />}/> 
                 < Route path="/video" element={< Video />}/> 
                < Route path="/login" element={< Login />}/>
                < Route path="/signin" element={< SignIn />}/>
                 </Routes> 
                 </BrowserRouter>
            
                );

}

                export default App;