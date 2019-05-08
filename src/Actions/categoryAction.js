import {ADD_CATEGORY, DELETE_CATEGORY} from './types';

export const createCategory = ({value}) => ({
  type: ADD_CATEGORY,
  value,
});

export const deleteCategory = id => ({
  type: DELETE_CATEGORY,
  id,
});