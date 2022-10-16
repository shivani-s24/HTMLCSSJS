const signinReducer=(state="login", action)=>
{
    switch(action.type){
        case "LogIn":
            return state = "loggedin";
           
        default:
            return state;
    }
}
export default signinReducer