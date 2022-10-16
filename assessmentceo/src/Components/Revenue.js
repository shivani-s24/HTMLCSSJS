import React, {useState} from 'react'
import './Client.css'


function Revenue(){

    const[list,setList] = useState([])
    fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(json=>{setList(json)})
    let ProductList = list.id;
    return(
       <div id="revenue">
           <h2>Revenue</h2>
       <ul>
           {list.map(list=>(
               <li key={[ProductList]}>

                   Name:{list.title}<br></br>
                   Price: {list.price}
               </li>
           ))}
       </ul>
       </div>
    )
}
export default Revenue