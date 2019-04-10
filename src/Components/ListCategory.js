import React from 'react';
import ButtonSubCategories from "./ButtonSubCategories";

const ListCategory = ({items, action}) => {
    return (
        <ul className='list'>
            {items.map((item, id) =>
                <li className='item'
                    key={id}>{item}
                    <ButtonSubCategories action={action}
                    />
                </li>
            )}
        </ul>
    );
};

export default ListCategory;