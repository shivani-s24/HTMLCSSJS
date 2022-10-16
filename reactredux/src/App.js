import './App.css';
import{useSelector,useDispatch} from 'react-redux'
import { increment,decrement, signin } from './Actions/counter';

function App(){
  const login =useSelector((state)=>state.signin)
  const counter=useSelector((state)=>state.counter)
  const dispatch = useDispatch()
  const logingin=()=>{
    dispatch(signin())
  }
  const inc=()=>{
    dispatch(increment())
  }
  const dec=()=>{
    dispatch(decrement())
  }
    
  return(
    <div>
      
      <h1>{login}</h1>
      <button onClick={logingin}>LogIn</button>
    <h1>
      Redux Counter
    </h1>
    <button onClick={inc}>Increment</button>
    <button onClick={dec}>Decrement</button>
    <h2>counter: {counter}</h2>
    </div>
  )
}
export default App;


