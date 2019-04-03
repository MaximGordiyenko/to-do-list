import React from 'react';
import '../style/Checkbox.css';

const Checkbox = ({type, name, action}) => {
    return (
        <div className="checkbox">
            <input type={type}
                   name={name}
                   onChange={action}
            />
        </div>
    );
};

export default Checkbox;