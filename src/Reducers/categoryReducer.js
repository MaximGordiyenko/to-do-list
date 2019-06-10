import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
} from '../Actions/types';

let counter = 0;
const categoryReducer = (state = [], {type, value, id, owner}) => {
  switch (type) {
    case ADD_CATEGORY:
      counter++;
      const category = {
        value: value,
        id: `cat_${counter}`,
        owner: owner,
        sub: [],
      };
      console.log(category);
      let temp = state;
      let flag = false;
      
      //TODO: попробуй переписаться на LODASH
      const move = arr => {
        arr.forEach(i => {
          if (i.id === owner) {
            flag = true;
            i.sub.push(category);
          } else {
            i.sub && i.sub.length >= 1 && move(i.sub);
          }
        });
      };
      
      move(temp);
      
      return flag ? [...temp] : [...state, category];
    
    case DELETE_CATEGORY:
      //TODO: пытайся удалять так же рекурсивно, как и идет добавление. можно юзать LODASH
      return [...state.filter(item => item.id !== id)];
    
    default:
      return state;
  }
};

export default categoryReducer;