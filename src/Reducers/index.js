import {combineReducers} from "redux";
import taskReducer from './taskReducer';
import categoryReducer from './categoryReducer';
import subReducer from "./subReducer";

export const rootReducer = combineReducers({
  taskReducer,
  categoryReducer,
  subReducer,
});