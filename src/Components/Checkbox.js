import React from 'react';

const Checkbox = ({type, name, action}) => {
    return (
        <div className="">
            <input type={type}
                   name={name}
                   onChange={action}
            />
        </div>
    );
};

export default Checkbox;