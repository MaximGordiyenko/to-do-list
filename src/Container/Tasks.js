import React, {Component} from 'react';
import {connect} from "react-redux";
import Progressbar from "../Components/Progressbar";
import List from "../Components/List";
import Button from "../Components/Button";
import Input from "../Components/Input";
import createTask from '../Actions/addAction';
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
    const {task} = this.props;
    const isExistTask = task.map(i => i.value).includes(this.state.value);
    if (!isExistTask) {
      this.props.anAddTask(this.state);
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
      if (i.value === e.target.value) i.isChecked = !i.isChecked;
      return i;
    });
    this.setState({
      tasks,
    });
  };

  render() {
    const {value} = this.state;
    const {task} = this.props;
    return (
        <>
          <div className='tasks-container'>

            <Progressbar
                current={(task).filter(i => i.isChecked === true).length}
                total={task.length}
            />

            <div className='form-tasks-wrapper'>
              <form className='form'>
                <Input type={'text'}
                       placeholder={'Text input with button'}
                       value={value}
                       action={this.handleChange}
                />
              </form>
              <Button action={this.handleSubmit}
                      title={"Add"}
              />{" "}
            </div>

            <List checks={task}
                  action={this.handleCheckbox}
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
  anAddTask: createTask,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Tasks);