import { useEffect } from "react";
import{useNavigate} from "react-router-dom";
import './App1.css';

export const Login=()=>{
    const navigate=useNavigate();
    const login=()=>{
        localStorage.setItem('login',true)
        navigate('/')
    }
    useEffect(()=>{
        let login=localStorage.getItem('login')
        if(login){
            navigate('/')
        }
    })
    return(
        <div id='login'>
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