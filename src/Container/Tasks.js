import React, {Component} from 'react';
import List from "../Components/List";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Progressbar from "../Components/Progressbar";
import '../style/Tasks.css'

class Tasks extends Component {
    state = {
        value: '',
        checks: [
            {value: "banana", isChecked: false},
            {value: "apple", isChecked: false},
            {value: "mango", isChecked: false},
            {value: "grape", isChecked: false}
        ]
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const isExistTask = this.state.checks.map(i => i.value).includes(this.state.value);
        if (!isExistTask) {
            this.setState({
                value: '',
                checks: [...this.state.checks, {
                    value: this.state.value, isChecked: false,
                }
                ],
            });
        } else {
            alert('Add task please or check existed task!');
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
        const {checks, value} = this.state;
        return (
            <>
                <div className='tasks-container'>

                    <Progressbar
                        current={(checks).filter(i => i.isChecked === true).length}
                        total={checks.length}
                    />

                    <div className='form-tasks-wrapper'>
                        <form className='form'>
                            <Input type={'text'}
                                   placeholder={'Text input with button'}
                                   value={value}
                                   action={this.handleChange}
                            />
                        </form>
                        <Button action={this.handleSubmit}
                                title={"Add"}
                        />{" "}
                    </div>

                    <List checks={checks}
                          action={this.handleCheckbox}
                    />
                </div>
            </>
        );
    }
}

export default Tasks;