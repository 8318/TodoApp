import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import AddForm from './components/addForm';
import Task from './components/task';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskList: [],
      task: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    let newTaskList =  this.state.taskList
    newTaskList.push(this.state.task)
    this.setState({taskList: newTaskList})
  }

  handleChange(event) {
    this.setState({task: event.target.value})
  }

  render() {
    const taskList = this.state.taskList.map((task) => {
      return (
        <Task task={task} />
      );
    })
    return (
      <div>
        <Header />
        <AddForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div>
          {taskList}
        </div>
      </div>
    );
  }
}

export default App;
