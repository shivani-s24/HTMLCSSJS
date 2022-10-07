import React, {useState, useEffect} from 'react'
import './App.css';
// function App(){
//   const [count,setCounter]= useState(0);
//   function increaseCount(){
//     setCounter(count+1);
//   }
//   function decreaseCount(){
//     setCounter(count-1);
//   }
//   return(
//     <div className='App'>
//       <h1> Count {count} times</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   );
// }

// export default App;
function App() {
  const [counter,setCounter] = useState(0);
useEffect(()=>{
  document.title = counter + "times Clicked"
})
function increaseCount(){
      setCounter(counter+1);
    }
    function decreaseCount(){
      setCounter(counter-1);
    }
    return(
          <div className='App'>
            <h1> Count {counter} times</h1>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
          </div>
        );

// const[details,setDetails]=useState({counter:0,name:""});
// function increaseCounter()
// {
//   setDetails((prev)=>({
//     ...prev, counter:prev.counter+1
//   }))
// }
// function decreaseCounter()
// {
//   setDetails((prev)=>({
//     ...prev, counter:prev.counter-1
//   }))
// }
// return(
//   <div className='App'>
//     <input type="text" onChange={e=>setDetails(e.target.value)}/>
//     <h1>Hi {details.name} !</h1>
//     <h1>Counter: {details.counter}</h1>
//     <button onClick={increaseCounter}> Increase</button>
//     <button onClick={decreaseCounter}> Decrease</button>
//   </div>
// )
 }
export default App;

/* ----------------useState ends here-----------------*/

// const [counter,setCounter] = useState(0);
// useEffect(()=>{
//   document.title = counter + "times Clicked"
// })
// function increaseCount(){
//       setCounter(counter+1);
//     }
//     function decreaseCount(){
//       setCounter(counter-1);
//     }
//     return(
//           <div className='App'>
//             <h1> Count {count} times</h1>
//             <button onClick={increaseCount}>Increase</button>
//             <button onClick={decreaseCount}>Decrease</button>
//           </div>
//         );
