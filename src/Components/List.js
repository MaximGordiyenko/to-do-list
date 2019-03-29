import React from 'react';

const List = ({items}) => (
    <ul>
        <h1>Hello</h1>
        {items.map((item, id) =>
            <li key={id}>
                {item}
            </li>
        )}
    </ul>
);

export default List;