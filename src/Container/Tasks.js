import React, {Component} from 'react';
import List from "../Components/List";
import Button from "../Components/Button";
import Input from "../Components/Input";
import '../style/Tasks.css'
import Filler from "../Components/Filler";

class Tasks extends Component {
    state = {
        value: '',
        percentage: 100,
        checks: [
            {value: "banana", isChecked: false},
            {value: "apple", isChecked: false},
            {value: "mango", isChecked: false},
            {value: "grap", isChecked: false}
        ]
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value) {
            this.setState({
                value: '',
                checks: [...this.state.checks, {
                    value: this.state.value, isChecked: this.state.isChecked,
                }
                ],
            });
        } else {
            alert('Add task please!');
        }
    };

    handleCheckbox = (e) => {
        let checks = this.state.checks.map(i => {
            if (i.value === e.target.value) i.isChecked = !i.isChecked;
            return i;
        });
        this.setState({
            checks,
        });
    };

    render() {
        return (
            <>
                <div className='tasks-container'>

                    <Filler percentage={this.state.percentage}
                            current={(this.state.checks).filter(i => i.isChecked === true).length}
                            total={this.state.checks.length}
                    />{this.state.checks.length}

                    <div className='form-tasks-wrapper'>
                        <form className='form'>
                            <Input type={'text'}
                                   placeholder={'Text input with button'}
                                   value={this.state.value}
                                   action={this.handleChange}
                            />
                        </form>
                        <Button action={this.handleSubmit}
                                title={"Add"}
                        />{" "}
                    </div>

                    <List checks={this.state.checks}
                          action={this.handleCheckbox}
                    />
                </div>
            </>
        );
    }
}

export default Tasks;