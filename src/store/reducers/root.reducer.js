import { combineReducers } from 'redux'
import { default as userReducer } from "./user.reducer";
import { default as todoReducer } from "./todo.reducer";


const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer
});

export default rootReducer;