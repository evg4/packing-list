/*import { createStore, combineReducers } from "redux";*/
import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./listSlice";
import viewReducer from "./changeViewSlice";

export const store = configureStore({
  reducer: { list: listReducer, view: viewReducer },
});

/*export const store = createStore(
  combineReducers({ list: listReducer, view: viewReducer })
);*/
