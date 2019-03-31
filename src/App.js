import React, {Component} from 'react';
import './style/App.css';
import Tasks from "./Container/Tasks";
import Categories from "./Container/Categories";

class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>To Do List</h1>
                <div className='component-container'>
                    <Categories/>
                    <Tasks/>
                </div>
            </div>
        );
    }
}

export default App;
