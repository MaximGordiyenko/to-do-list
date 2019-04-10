import React from 'react';
import '../style/AddButton.css';

const AddButton = ({action}) => {
    return (
        <div className='btn-category'>
            <button className='btn-add'
                    onClick={action}>
            </button>
        </div>
    )
};

export default AddButton;