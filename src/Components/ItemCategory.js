import React from 'react';
import Button from "./Button";
import '../style/ItemCategory.css';

const ItemCategory = ({items, action}) => {
    return (
        <ul className='list'>
            {items.map((item, id) =>
                <li className='item'
                    key={id}>{item}
                    <div className='btns'>
                        <Button action={action}
                                title={'\u270E'}/>
                        <Button action={action}
                                title={'x'}/>
                        <Button action={action}
                                title={'+'}/>
                    </div>
                </li>
            )}
        </ul>
    );
};

export default ItemCategory;