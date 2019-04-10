import React from 'react';

const DeleteButton = ({action, title}) => {
    return (
        <div className="btn-category">
            <button className='btn-delete'
                    onClick={action}>{title}
            </button>
        </div>
    );
};

export default DeleteButton;