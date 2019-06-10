import React from 'react';
import '../style/Checkbox.css';

const Checkbox = ({checked, value, type, action}) => {
  return (
      <div className="checkbox">
        <input type={type}
               checked={checked}
               value={value}
               onChange={action}/>{value}
      </div>
  );
};

export default Checkbox;