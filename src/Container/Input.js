import React, {Component} from 'react';
import List from "../Components/List";

class Input extends Component {
    state = {
        value: '',
        items: [],
    };

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = (e) => {
        // console.log(e.state.value);
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
                <button onClick={this.handleSubmit}>Submit</button>
                <List items={this.state.items}/>
            </div>
        );
    }
}

export default Input;