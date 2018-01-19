import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import AddForm from './components/addForm';
import Task from './components/task';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskList: [
        'task1', 'task2', 'task3'
      ],
      task: ''
    }
    this.handleChange = this.handleChange.bind()
    this.handleSubmit = this.handleSubmit.bind()
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("add task clicked", event)
  }

  handleChange(event) {
    console.log(event)
    // this.state.task = event.target.value
    // this.setState((state) => {task: "event.target.value"})
  }

  render() {
    console.log(this.state)
    const taskList = this.state.taskList.map((task) => {
      console.log(task);
      return (
        <Task task={task} />
      );
    })
    console.log(taskList)
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
