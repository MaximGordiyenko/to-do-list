import React from 'react';
import Filler from "./Filler";
import '../style/ProgressFiller.css';

const ProgressFiller = ({current, total}) => {
    return (
        <div className="progress-bar">
            <Filler total={total}
                    current={current}
            />
        </div>
    )
};

export default ProgressFiller;