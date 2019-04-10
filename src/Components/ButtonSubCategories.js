import React from 'react';
import '../style/ButtonSubCategories.css';

const ButtonSubCategories = ({action}) => {
    return (
        <div className='buttonCat'>
            <button className='buttonPlus'
                    onClick={action}>
            </button>
        </div>
    )
};

export default ButtonSubCategories;