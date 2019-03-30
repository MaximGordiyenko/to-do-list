import React, {Component} from 'react';
import List from "../Components/List";
import Button from "../Components/Button";
import Input from "../Components/Input";

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

    render() {
        return (
            <>
                <form>
                    <Input type={'text'}
                           placeholder={'add item'}
                           value={this.state.value}
                           action={this.handleChange}
                    />
                </form>
                <Button action={this.handleSubmit}
                        title={"Submit"}
                />{" "}
                <List items={this.state.items}/>
            </>
        );
    }
}

export default Tasks;