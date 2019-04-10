import React from 'react';
import '../style/Button.css'

const Button = ({action, title}) => {
    return (
        <button
            className='button'
            onClick={action}>{title}
        </button>
    )
};

export default Button;