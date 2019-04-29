import {ADD_TASK} from "../Actions/types";

const initialState = [];

const addTask = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TASK:
      return [
        ...state, payload,
      ];
    default:
      return state;
  }
};
export default addTask;