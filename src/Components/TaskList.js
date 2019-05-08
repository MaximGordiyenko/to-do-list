import React from 'react';
import '../style/List.css'
import Checkbox from "./Checkbox";
import Button from "./Button";

const TaskList = ({task, checkbox, deleteTask}) => (
    <ul className='list'>
      {task.map((item) =>
          <li className='item' key={item.id}>
            <Checkbox type={"checkbox"}
                      checked={item.completed}
                      value={item.value}
                      action={checkbox}
            />
            <Button title={'\u270E'}
                    className='plus'
            />
            <Button action={() => deleteTask(item.id)}
                    title={'\u232B'}
                    className='plus'
            />
          </li>
      )}
    </ul>
);

export default TaskList;