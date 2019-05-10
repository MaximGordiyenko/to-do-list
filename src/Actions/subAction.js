import {ADD_SUB_CATEGORY, DELETE_SUB_CATEGORY} from "./types";

export const createSubCategory = (value) => ({
  type: ADD_SUB_CATEGORY,
  value,
});

export const deleteSubCategory = (id) => ({
  type: DELETE_SUB_CATEGORY,
  id,
});