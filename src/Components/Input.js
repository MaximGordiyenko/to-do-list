import React from 'react';

const Input = ({type, value, placeholder, action}) => {
    return (
        <div className="">
            <input type={type}
                   value={value}
                   placeholder={placeholder}
                   onChange={action}
            />
        </div>
    );
};

export default Input;