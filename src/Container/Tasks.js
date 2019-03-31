import React, {Component} from 'react';
import List from "../Components/List";
import Button from "../Components/Button";
import Input from "../Components/Input";
import Checkbox from "../Components/Checkbox";
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
        this.setState({
            value: '',
            items: [...this.state.items, this.state.value],
        });
    };

    handleCheckbox = () => {

    };

    render() {
        return (
            <div>
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

                    <List items={this.state.items}>
                        <Checkbox name={'checkbox'}
                                  type={"checkbox"}
                                  action={this.handleCheckbox}
                        />
                    </List>
                </div>
            </div>
        );
    }
}

export default Tasks;