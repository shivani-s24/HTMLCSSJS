import React from 'react'
import Client from './Client'
import Product from './Product'
import Revenue from './Revenue'
import Sales from './Sales'

const Dashboard=()=>{

    return(
        <div id='dashboard'>
            <h1 id='head'>Your Dashboard</h1>
          <p> <Client/></p>
          <p><Product/></p>
          <p><Revenue/></p>
          <p><Sales/></p>
          
        </div>
    )
}
export default Dashboard