import React from 'react';
import '../style/Filler.css';
// import style from '../style/Filler.css'

const Filler = ({percentage,}) => {
    return (
        <div className='filler'>
            style={{width: `${percentage}%`}}
            />
        </div>
    );
};

export default Filler;