import { combineReducers } from "redux";
import authReducer from './AuthReducer.js'
import postReducer from "./postReducer.js";

export const reducers = combineReducers({authReducer, postReducer})
