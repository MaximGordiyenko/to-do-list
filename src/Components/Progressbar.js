import React from 'react';
import '../style/Progressbar.css';

const Progressbar = ({current, total}) =>
    <div className='progress-bar'>
      <div className="filler"
           style={{width: `${((current / total) || 0) * 100}%`}}>
      </div>
    </div>;

export default Progressbar;

