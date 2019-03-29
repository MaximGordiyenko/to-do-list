import React, {Component} from 'react';
import '../style/App.css';
import Input from "./Input";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>To Do List</h1>
                <Input/>
            </div>
        );
    }
}

export default App;
