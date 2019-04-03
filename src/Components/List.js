import React from 'react';
import '../style/List.css'
import Checkbox from "./Checkbox";

const List = ({items, action}) => (
    <ul className='list'>
        {items.map((item, id) =>
            <li className='item'
                key={id}>{item}
                <Checkbox name={'checkbox'}
                          type={"checkbox"}
                          action={action}
                />
            </li>
        )}
    </ul>
);

export default List;