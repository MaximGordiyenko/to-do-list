import React from 'react';
import Button from "./Button";
import '../style/ItemCategory.css';

const CategoryList = ({category, action, deleteCategory}) => (
    <ul className='list'>
      {category.map((item) =>
          <li className='item'
              key={item.id}>{item.value}
            <div className='btns'>
              <Button action={action}
                      title={'\u270E'}/>
              <Button action={() => deleteCategory(item.id)}
                      title={'x'}/>
              <Button action={action}
                      title={'+'}/>
            </div>
          </li>
      )}
    </ul>
);

export default CategoryList;