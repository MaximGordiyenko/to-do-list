import React from 'react';
import '../style/List.css'
import Checkbox from "./Checkbox";
import Button from "./Button";

const List = ({checks, action}) => (
    <ul className='list'>
      {checks.map((item, id) =>
          <li className='item'
              key={id}>
            <Checkbox type={"checkbox"}
                      checked={item.isChecked}
                      value={item.value}
                      action={action}
            />
            <Button action={action}
                    title={'\u270E'}
                    className='plus'/>
          </li>
      )}
    </ul>
);

export default List;