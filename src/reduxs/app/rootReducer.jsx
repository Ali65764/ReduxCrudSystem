import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "../slices/CounterSlice";
import  userSlice  from "../slices/userSlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
  user: userSlice 
});
