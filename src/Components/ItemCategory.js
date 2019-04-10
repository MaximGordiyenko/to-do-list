import React from 'react';
import AddButton from "./addButton";
import DeleteButton from "./DeleteButton";

const ItemCategory = ({items, action}) => {
    return (
        <ul className='list'>
            {items.map((item, id) =>
                <li className='item'
                    key={id}>{item}
                    <AddButton action={action}/>
                    <DeleteButton action={action}
                    title={'x'}/>
                </li>
            )}
        </ul>
    );
};

export default ItemCategory;