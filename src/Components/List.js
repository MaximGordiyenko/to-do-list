import React from 'react';
import '../style/List.css'
import Checkbox from "./Checkbox";
import Button from "./Button";

const List = ({task, checkbox, deleteTask}) => (
    <ul className='list'>
      {task.map((item, id) =>
          <li className='item' key={id}>
            <Checkbox type={"checkbox"}
                      checked={item.completed}
                      value={item.value}
                      action={checkbox}
            />
            <Button
                    title={'\u270E'}
                    className='plus'
            />
            <Button action={deleteTask}
                    title={'\u232B'}
                    className='plus'
            />
          </li>
      )}
    </ul>
);

export default List;