import React, { Component } from "react";

import TodoTask from "./TodoTask.js";
import todoDatabase from "../todoDatabase";

class Main extends Component {
    constructor() {
        super();
        this.state = {
            todoList: todoDatabase,
        }
        this.handleAction = this.handleAction.bind(this);
    }
    handleAction(id) {
        this.setState(previousState => {
            const newList = previousState.todoList.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            });
            return {
                todoList: newList,
            }});
        };
    render() {
        const todoList = this.state.todoList.map(task => <TodoTask key={task.id} id={task.id} completed={task.completed} text={task.text} handleAction={this.handleAction} />);
        return (
            <main>
                {todoList}
            </main>
        )
    }
}

export default Main;