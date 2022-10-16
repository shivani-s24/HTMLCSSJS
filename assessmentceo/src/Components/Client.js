import React, { useState } from 'react'
import './Client.css'

function Client(){
 const[list,setList] = useState([])
 fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(json=>{setList(json)})
 return(
    <div id = "client">
    <h2>Clients List</h2>
    <ul>
        {list.map(list=>(
            <li key={list.id}>
                Name:{list.name} | Email:{list.email}
            </li>
        ))}
    </ul>
    </div>
 )
}
export default Client