import countReducer from "c:/reactDemo/reactredux/src/Reducer/countReducer";
import signinReducer from "c:/reactDemo/reactredux/src/Reducer/signinReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter:countReducer,
    signin:signinReducer
})
export default allReducers;