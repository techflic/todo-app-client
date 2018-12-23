import { combineReducers } from 'redux'
import { default as userReducer } from "./user.reducer";
import { default as todoReducer } from "./todo.reducer";


export default combineReducers({
	user: userReducer,
	todo: todoReducer
});
