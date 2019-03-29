import React from 'react';
import '../style/List.css'

const List = ({items}) => (
    <ul className='list'>
        {items.map((item, id) =>
            <li className='item'
                key={id}>
                {item}
            </li>
        )}
    </ul>
);

export default List;