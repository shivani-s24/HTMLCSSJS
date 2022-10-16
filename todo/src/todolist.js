import React from 'react'
import Todo from './todo';
const Todolist=({mylist})=> {
  return (
    <div>
        <ul>
            {mylist.map((list)=>(
                <Todo text={list.text}/>
            ))}
        </ul>
    </div>
  )
}
export default Todolist;