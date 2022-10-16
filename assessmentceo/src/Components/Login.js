import { useEffect } from "react";
import{useNavigate} from "react-router-dom";
import './Client.css'

export const Login=()=>{
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/Dashboard')
    }
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login){
            navigate('/Dashboard')
        }
    })
    return(
        <div id='login'>
            <h3> Welcome Mr.Anuj Bajaj </h3>
            <label>Username: <br></br>
            <input type="text"></input>
            </label><br></br>
            <label>Password: <br></br>
            <input type ="password"></input>
            </label><br></br><br></br>
            <button id='loginbtn' onClick={login}>Login</button>
        </div>
    )
}
export default Login;