import React, {Component} from 'react';
import {connect} from "react-redux";
import Progressbar from "../Components/Progressbar";
import TaskList from "../Components/TaskList";
import Button from "../Components/Button";
import Input from "../Components/Input";
import {createTask, deleteTask} from '../Actions/taskAction';
import '../style/Tasks.css'

class Tasks extends Component {
  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {task, createTask} = this.props;
    const isExistTask = task.map(i => i.value).includes(this.state.value);
    const isEmpty = this.state.value !== '';
    if (!isExistTask && isEmpty) {
      createTask(this.state);
      this.setState({
        value: '',
      });
    } else {
      alert('Add task please or check existed task!');
    }
  };

  handleCheckbox = (e) => {
    const {task} = this.props;
    let tasks = task.map(i => {
      if (i.value === e.target.value) i.completed = !i.completed;
      return i;
    });
    this.setState({
      tasks,
    });
  };
//https://stackoverflow.com/questions/55357974/payload-undefined-when-try-to-delete-selected-id
  handleDelete = (id) => {
    const {deleteTask} = this.props;
    deleteTask(id);
  };

  render() {
    const {value} = this.state;
    const {task} = this.props;
    return (
        <>
          <div className='tasks-container'>

            <Progressbar
                current={(task).filter(i => i.completed === true).length}
                total={task.length}
            />

            <div className='form-tasks-wrapper'>
              <form className='form'>
                <Input type={'text'}
                       placeholder={'Text input with button'}
                       value={value}
                       required={true}
                       action={this.handleChange}
                />
              </form>
              <Button action={this.handleSubmit}
                      title={"Add"}
              />{" "}
            </div>

            <TaskList task={task}
                      checkbox={this.handleCheckbox}
                      deleteTask={this.handleDelete}
            />
          </div>
        </>
    );
  }
}

const mapStateToProps = state => ({
  task: state.task,
});

const mapDispatchToProps = {
  createTask,
  deleteTask,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tasks);