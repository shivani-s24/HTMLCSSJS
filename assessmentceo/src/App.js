
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Login from './Components/Login';
import Protected from './Components/Protected';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';

function App() {
  return (
    

   <Router>
    <nav id='navb'>

      <h5 id='tech'>Technocrats pvt ltd</h5>
      <Link id='login' to='/Login'/>
      <Link id= 'Dashboard' to='/Dashboard'>Dashboard</Link>
      <Link id='Logout' to='/Logout'>Logout</Link>

    </nav>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Protected Component={Dashboard}/>}/>
      <Route path='/Logout' element={<Logout/>}/>
    </Routes>
   </Router>
  
  );
}

export default App;
