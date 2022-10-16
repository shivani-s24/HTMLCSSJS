import{useNavigate} from "react-router-dom";

export const Logout=()=>{
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.setItem('login',false)
        localStorage.clear()
        navigate('/Login')
    }
    
   
 

    return(
        <div>
            <button onClick={logout}>LogOut</button>
        </div>
    )
}
export default Logout;