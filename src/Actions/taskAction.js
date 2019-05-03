import {ADD_TASK, DELETE_TASK} from './types';

export const createTask = ({value}) => ({
  type: ADD_TASK,
    value,
});

export const deleteTask = id => ({
  type: DELETE_TASK,
    id,
});