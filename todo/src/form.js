import React from 'react';

const Form=({setdata,data,mylist,setmylist})=>
{
   const inputtexthandler=(e)=>{
    setdata(e.target.value)
   }   
   const submittodohandler=(e)=>{
    e.preventDefault();
    setmylist([
        ...mylist,{text:data}]);
        setdata("");
   };
    return(
        <form>
            <input value={data}
             onChange={inputtexthandler} 
             type="text"/>
            <button onClick={submittodohandler} type='submit'>Submit</button>
        </form>
    )
}
export default Form;