import React, {Component} from 'react';
import List from "../Components/List";
import Button from "../Components/Button";

class Input extends Component {
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
            <div>
                <form>
                    <input type="text"
                           value={this.state.value}
                           onChange={this.handleChange}/>
                </form>
                <Button action={this.handleSubmit}
                        title={"Submit"}
                />{" "}
                <List items={this.state.items}/>
            </div>
        );
    }
}

export default Input;