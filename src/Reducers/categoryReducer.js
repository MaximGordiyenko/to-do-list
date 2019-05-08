import {ADD_CATEGORY, DELETE_CATEGORY} from "../Actions/types";
import uuidv4 from "uuid/v4";

const categoryReducer = (state=[], {type, value, id}) => {
  switch (type) {
    case ADD_CATEGORY:
      return [...state, {
        value: value,
        id: uuidv4(),
      }];

    case DELETE_CATEGORY:
      return [...state.filter(item => item.id !== id)];

    default:
      return state
  }
};

export default categoryReducer;