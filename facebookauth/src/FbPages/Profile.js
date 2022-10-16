import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile=()=>{
    let navigate=useNavigate();

    // let{username,age,heorshe}=useParams();
    return(
        <div>
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {/* <h1>This is a Profile Page of {username} ,{heorshe} is {age} </h1> */}
            <button onClick={()=>{navigate("/BakeryPage")}}>Friend's List</button>
            <button onClick={()=>{navigate("/Messages")}}>Messages</button>
        </div>
    )
}
export default Profile