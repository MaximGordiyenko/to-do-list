import React, {Component} from 'react';
import './style/App.css';
import Tasks from "./Container/Tasks";

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>To Do List</h1>
                <Tasks/>
            </div>
        );
    }
}

export default App;
