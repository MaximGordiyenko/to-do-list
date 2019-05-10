import React from 'react';
import '../style/List.css';
import Button from "./Button";

const SubList = ({sub, action, deleteCategory, handleAddSub}) => (
  <ul className='list'>
    {sub.map((item, id) =>
      <li className='item'
          key={item.id}> {item.value}{id}
        <div className='btns'>
          <Button action={action}
                  title={'\u270E'}/>
          <Button action={() => deleteCategory(item.id)}
                  title={'x'}/>
          <Button action={() => handleAddSub(item.id)}
                  title={'+'}/>
        </div>
      </li>
    )}
  </ul>
);

export default SubList;


