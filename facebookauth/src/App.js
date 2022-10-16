import './App.css';
import './fbLogo.png'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Friends from './FbPages/Friends';
import Home from './FbPages/HomePage';
import Profile from './FbPages/Profile';
import Messages from './FbPages/Messages';
import Notifications from './FbPages/Notifications';
import Protected from './FbPages/Protected';
import Login from './FbPages/Login';
import Logout from './FbPages/Logout';
import { Component } from 'react';
// import React, { lazy } from 'react';
// const Home = lazy(()=> import('./Pages/HomePage.js'));

function App() {
  return (

    <Router>
    <nav>
    <img id='fblogo' src="./fbLogo.png"></img>
    <input id='search' type="text" placeholder='Search'></input>
    {/* <Link id="login" to="/Login">.</Link> */}
      <Link id='link1' to="/">⌂</Link>
      
      <Link id='link3' to="/Friends">👥</Link>
      <Link id='link4' to="/Profile">👤</Link>
      <Link id='msgs' to="/Messages">💬</Link>
      <Link id='noti' to="/Notifications">🕭</Link>
      <Link to="/Logout">Logout</Link>
    </nav>

      <Routes>
        <Route path='/' element={<Protected Component={Home}/>}/>
        {/* <Route path='/' element={<React.Suspense fallback ="loading..please wait" ><Home/></React.Suspense>}/> */}
        <Route path='/Friends' element={<Protected Component={Friends}/>}/>
        <Route path='/Profile' element={<Protected Component={Profile}/>}/>
        <Route path='/Messages' element={<Protected Component={Messages}/>}/>
        <Route path='/Notifications' element={<Protected Component={Notifications}/>}/>
        <Route path='/Profile/:username/:heorshe/:age' element={<Protected Component={Profile}/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Logout' element={<Logout/>}/>
      </Routes>
      <div id="footer"> 
      Copyright © 2022 . All rights reserved.
      </div>
    </Router>

  );
}

export default App;
