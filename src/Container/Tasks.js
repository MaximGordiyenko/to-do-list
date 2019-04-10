import React, {Component} from 'react';
import List from "../Components/List";
import Button from "../Components/Button";
import Input from "../Components/Input";
import '../style/Tasks.css'

class Tasks extends Component {
    state = {
        value: '',
        items: [],
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
                items: [...this.state.items, this.state.value],
            });
        } else {
            alert('Add task please!');
        }
    };

    handleCheckbox = () => {

    };

    render() {
        return (
            <>
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

                    <List items={this.state.items}
                          action={this.handleCheckbox}
                    />
                </div>
            </>
        );
    }
}

export default Tasks;