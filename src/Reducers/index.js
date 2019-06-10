import {combineReducers} from "redux";
import taskReducer from './taskReducer';
import categoryReducer from './categoryReducer';

export const rootReducer = combineReducers({
  taskReducer,
  categoryReducer,
});