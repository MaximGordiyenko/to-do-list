import { ADD_CATEGORY, DELETE_CATEGORY } from './types';

export const createCategory = (param, owner) => {
  const value = param.value || param;
  return ({
    type: ADD_CATEGORY,
    value,
    owner,
  });
};

export const deleteCategory = id => ({
  type: DELETE_CATEGORY,
  id,
});