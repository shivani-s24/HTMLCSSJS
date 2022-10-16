import { useEffect } from "react";
import{useNavigate} from "react-router-dom";

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
        <div>
            <label>Username: <br></br>
            <input type="text"></input>
            </label><br></br>
            <label>Password: <br></br>
            <input type ="password"></input>
            </label>
            <button onClick={login}>Login</button>
        </div>
    )
}
export default Login;