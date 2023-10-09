import { createStore, combineReducers } from "redux";
import { listReducer } from "./listSlice";
import { viewReducer } from "./changeViewSlice";

export const store = createStore(
  combineReducers({ list: listReducer, view: viewReducer })
);
