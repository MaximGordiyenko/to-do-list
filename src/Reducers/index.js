import {combineReducers} from "redux";
import addTask from './addReducer';

export const rootReducer = combineReducers({
  task: addTask
});