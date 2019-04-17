import React, {Component} from 'react';
import List from "../Components/List";
import Button from "../Components/Button";
import Input from "../Components/Input";
import '../style/Tasks.css'
import Filler from "../Components/ProgressFiller";

class Tasks extends Component {
    state = {
        value: '',
        percentage: 0,
        checks: [
            {value: "banana", isChecked: false},
            {value: "apple", isChecked: false},
            {value: "mango", isChecked: false},
            {value: "grap", isChecked: true}
        ]
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value) {
            this.setState({
                value: '',
                checks: [...this.state.checks, this.state.value],
            });
        } else {
            alert('Add task please!');
        }
    };

    handleInputChange = (e) => {
        let checks =  this.state.checks.map(i => {
            if (i.value === e.target.value) i.isChecked = !i.isChecked
            return i
        });
        this.setState({checks})
    };

    render() {
        return (
            <React.Fragment>
                <div className='tasks-container'>
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
                          action={this.handleInputChange}
                    />
                    <Filler
                            current={(this.state.checks).filter(i => i.value === true).length}
                            total={this.state.checks.length}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Tasks;