import React ,{useState} from 'react';
import './App.css';
import Form from './form';
import Todolist from './todolist';
function App() {
  const [data,setdata]=useState("")
  const [mylist,setmylist]=useState([])
  return (
    <div className="App">
      <h1>TODOLIST</h1>
      <Form mylist={mylist} setmylist={setmylist} data={data} setdata={setdata}/>
      <Todolist mylist={mylist}/>
    </div>
  );
}

export default App;