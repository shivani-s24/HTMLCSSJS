import{useNavigate} from "react-router-dom";
import './Client.css'

export const Logout=()=>{
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.setItem('login',false)
        localStorage.clear()
        navigate('/Login')
    }
    
   
 

    return(
        <div>
            
            <button id='logout' onClick={logout}>LogOut</button>
        </div>
    )
}
export default Logout;