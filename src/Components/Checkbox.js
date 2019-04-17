import React from 'react';
import '../style/Checkbox.css';

const Checkbox = ({isChecked, value, type, action}) => {
    return (
        <div className="checkbox">
            <input type={type}
                   checked={isChecked}
                   value={value}
                   onClick={action}/>{value}
        </div>
    );
};

export default Checkbox;