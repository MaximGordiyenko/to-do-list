import React, {Component} from 'react';
import ProgressFiller from "../Components/ProgressFiller";

class ProgressBar extends Component {
    state = {
        percentage: 0,
    };

    render() {
        return (
            <div>
                <ProgressFiller percentage={this.state.percentage}
                />
            </div>
        );
    }
}

export default ProgressBar;