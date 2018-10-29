import { reducer as formReducer } from 'redux-form'
import login from './loginReducer'
import {routerReducer } from 'react-router-redux'
import {combineReducers} from 'redux'
export const rootReducer = combineReducers({
 form: formReducer,
 routing: routerReducer,
 login
 
 });
export default rootReducer


