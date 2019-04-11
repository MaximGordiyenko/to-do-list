import React from 'react';
import Filler from "./Filler";
import '../style/ProgressFiller.css';

const ProgressFiller = ({percentage, width}) => {
    return (
        <div className="progress-bar">
            <Filler percentage={percentage}
            />
        </div>
    );
};

export default ProgressFiller;