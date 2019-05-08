import {ADD_TASK, DELETE_TASK} from "../Actions/types";
import uuidv4 from "uuid/v4";

const taskReducer = (state = [], {type, value, id}) => {
  switch (type) {
    case ADD_TASK:
      return [...state, {
        value: value,
        completed: false,
        id: uuidv4(),
      }];

    case DELETE_TASK:
      return [...state.filter(todo => todo.id !== id)];

    default:
      return state;
  }
};
export default taskReducer;