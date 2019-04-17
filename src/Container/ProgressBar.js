import React, {Component} from 'react';
import Filler from "../Components/ProgressFiller";

class ProgressBar extends Component {
    state = {
        percentage: 0,
        checks: [
            {name: 'id1', value: false},
            {name: 'id2', value: false},
            {name: 'id3', value: false},
            {name: 'id4', value: false},
            {name: 'id5', value: true},
            {name: 'id6', value: false},
        ]
    };

    handleInputChange = (e) => {
        let checks = this.state.checks;
        checks.forEach(i => {
            if (i.name === e.target.name) {
                return i.value = !i.value;
            }
        });
        this.setState({checks: checks})
    };

    render() {
        return (
            <div>
               {/* <Filler percentage={5}
                        current={(this.state.checks).filter(i => i.value === true).length}
                        total={this.state.checks.length}
                />*/}
                {/*{this.state.checks.map((i, idx) => <input key={idx}
                 name={i.name}
                 type="checkbox"
                 checked={i.value}
                 onChange={this.handleInputChange}/>)
                 }*/}
            </div>
        );
    }
}

export default ProgressBar;