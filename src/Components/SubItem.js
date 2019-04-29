import React from 'react';
import '../style/List.css';

const SubItem = ({items}) => (
    <ul className='list'>
      {items.map((item, id) =>
          <li className='item'
              key={id}>
            {item.value}
          </li>
      )}
    </ul>
);

export default SubItem;


