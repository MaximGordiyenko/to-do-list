import React from 'react';
import '../style/List.css'
import Checkbox from "./Checkbox";

const List = ({action, checks}) => (
    <ul className='list'>
        {checks.map((item, id) =>
            <li className='item'
                key={id}>
                <Checkbox type={"checkbox"}
                          name={item.name}
                          checked={item.isChecked}
                          value={item.value}
                          action={action}
                />
            </li>
        )}
    </ul>
);

export default List;