import React from 'react';
import '../style/Filler.css';

const Filler = ({current, total}) => {
    let realPercent = current / total * 100;
    return <div className="filler progress-bar"
                style={{width: `${realPercent}%`}}
    />
};


export default Filler;

