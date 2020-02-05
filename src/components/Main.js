import React, { Component } from "react";

import TodoTask from "./TodoTask.js";
import todoDatabase from "../todoDatabase.js";
import Contacts from "./Contacts.js";
import Jokes from "./Jokes.js";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      tasks: todoDatabase
    };
  }
  handleTick = id => {
    this.setState(prevState => {
      // MAP
      const updatedTasks = prevState.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      });
      // SET STATE
      return {
        todos: updatedTasks
      };
    });
  };

  handleDelete = index => {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  render() {
    const allTasks = this.state.tasks.map((task, index) => (
      <TodoTask
        key={task.id}
        index={index}
        handleDelete={this.handleDelete}
        taskID={task.id}
        text={task.text}
        completed={task.completed}
        handleTick={this.handleTick}
      />
    ));
    return (
      <main>
        <h1>React tutorial</h1>
        <div id="2" className="todo">
          <h2>A to-do list</h2>
          <div className="todo">{allTasks}</div>
        </div>
        <Contacts />
        <Jokes />
      </main>
    );
  }
}

export default Main;
