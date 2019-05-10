import {ADD_SUB_CATEGORY, DELETE_SUB_CATEGORY} from "../Actions/types";

const subReducer = (state = [], {type, value, id}) => {
  switch (type) {
    case ADD_SUB_CATEGORY:
      return [...state, {
        // value: value,
        // id: uuidv4(),
      }
      ];

    case DELETE_SUB_CATEGORY:
      return [...state];

    default:
      return state;
  }
};

export default subReducer;