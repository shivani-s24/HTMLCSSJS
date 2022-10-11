import './App.css';
import './fbLogo.png'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Bakery from './Pages/BakeryPage';
import Home from './Pages/HomePage';
import Electronics from './Pages/ElectronicsPage';
import PageNotFound from './Pages/Pagenotfound';
import Profile from './Pages/Profile';
import Messages from './Pages/Messages';
import Notifications from './Pages/notification';
import React from 'react';

function App() {
  return (

    <Router>
    <nav>
    <img id='fblogo' src="./fbLogo.png"></img>
    <input id='search' type="text" placeholder='Search'></input>
      <Link id='link1' to="/">⌂</Link>
      <Link id='link2' to="/ElectronicsPage">🎞️</Link>
      <Link id='link3' to="/BakeryPage">👥</Link>
      <Link id='link4' to="/Profile">👤</Link>
      <Link id='msgs' to="/Messages">💬</Link>
      <Link id='noti' to="/notification">🕭</Link>
    </nav>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ElectronicsPage' element={<Electronics/>}/>
        <Route path='/BakeryPage' element={<Bakery/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path='/Messages' element={<Messages/>}/>
        <Route path='/notification' element={<Notifications/>}/>
        <Route path='/Profile/:username/:heorshe/:age' element={<Profile/>}/>
      </Routes>
      <div id="footer"> 
      Copyright © 2022 . All rights reserved.
      </div>
    </Router>

  );
}

export default App;
