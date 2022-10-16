import React, { useState } from 'react'
import './Client.css'

function Product(){
 const[list,setList] = useState([])
 fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(json=>{setList(json)})
 return(
    <div id='product'>
        <h2>Product</h2>
    <ul>
        {list.map(list=>(
            <li key={list.id}>
                Name:{list.title} 
            </li>
        ))}
    </ul>
    </div>
 )
}
export default Product