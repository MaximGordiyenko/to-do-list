import React from 'react';
import '../style/Filler.css';

const Filler = ({current, total, percentage}) =>
    <div className='progress-bar'>
        <div className="filler"
             style={{width: percentage || `${current / total * 100}%`}}>
        </div>
    </div>;

export default Filler;

