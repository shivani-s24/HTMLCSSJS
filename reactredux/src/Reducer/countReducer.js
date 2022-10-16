let num = window.prompt("Enter your number: ");
const countReducer =(state=num,action)=>
{
    switch(action.type){
        case "INCREMENT":
            return +state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
}
export default countReducer;