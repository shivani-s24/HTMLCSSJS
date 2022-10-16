import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Protected from './Pages/Protected'
import AboutUs from './Pages/AboutUs'
import Logout from './Pages/Logout'

function App() {
  return (
   <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/AboutUs">AboutUs</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Logout">Logout</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Protected Component = {Home}/>}/>
      <Route path='/AboutUs' element={<Protected Component = {AboutUs}/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Logout' element={<Logout/>}/>
            
    </Routes>
   </Router>
  );
}

export default App;
