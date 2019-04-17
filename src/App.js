import React, {Component} from 'react';
import './style/App.css';
import Tasks from "./Container/Tasks";
import Categories from "./Container/Categories";
import FilterForm from "./Container/FilterForm";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className='header'>
                    <h1>To Do List</h1>
                    <FilterForm/>
                </div>

                <div className='component-container'>
                    <Categories/>
                    <Tasks/>
                </div>
            </div>
        );
    }
}

export default App;
