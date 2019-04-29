import uuidv4 from 'uuid/v4';
import {ADD_TASK} from './types';

const createTask = ({value}) => ({
  type: ADD_TASK,
  payload: {
    id: uuidv4(),
    value,
    isChecked: false,
  }
});

export default createTask;