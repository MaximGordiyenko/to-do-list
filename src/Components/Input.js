import React from 'react';
import '../style/Input.css';

const Input = ({type, value, placeholder, action}) => {
    return (
        <div className="">
            <input type={type}
                   value={value}
                   className='tasks-input'
                   placeholder={placeholder}
                   onChange={action}
            />

        </div>
    );
};

export default Input;