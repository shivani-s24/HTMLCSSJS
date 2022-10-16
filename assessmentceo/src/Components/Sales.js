import React, { useState }  from 'react'
import './Client.css'


function Sales(){

    const[list,setList] = useState([])
    fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(json=>{setList(json)})
    let myRatings = list.rating
    let ProductList = list.id;
    return(
       <div id='sales'>
           <h2>Sales with Ratings</h2>
       <ul>
           {list.map(list=>(
               <li key={[myRatings,ProductList]}>
                  Name:{list.title}<br></br>
                   Rating:{list.rate}

               </li>
           ))}
       </ul>
       </div>
    )
}
export default Sales