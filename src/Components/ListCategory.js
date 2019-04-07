import React from 'react';

const ListCategory = ({items}) => {
    return (
        <ul className='list'>
            {items.map((item, id) =>
                <li className='item'
                    key={id}>{item}
                </li>
            )}
        </ul>
    );
};

export default ListCategory;