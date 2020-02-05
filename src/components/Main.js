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
            tasks: todoDatabase,
        };
        this.handleTick = this.handleTick.bind(this);
    };
    handleTick(id) {
        this.setState(prevState => {
            // MAP
            const updatedTasks = prevState.tasks.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed
                }
                return task
            })
            // SET STATE
            return {
                todos: updatedTasks
            }
        });
    };
    // addItem(e) {
    //     const updatedTasks = [...this.state.tasks];

    // };
    deleteLine = (index) => {
        console.log(index);
    }
    render() {
        const allTasks = this.state.tasks.map((task, index) => <TodoTask key={task.id} index={index} taskID={task.id} text={task.text} completed={task.completed} handleTick={this.handleTick} deleteLine={this.deleteLine} />);
        return (
            <main>
                <h1>React tutorial</h1>
                <div id="2" className="todo">
                    <h2>A to-do list</h2>
                    <div className = "todo">
                        {allTasks}
                    </div>
                </div>
                <Contacts />
                <Jokes />
            </main>
        )
    }
}

// function Main () {
//     const task = todoDatabase.map(task => <TodoTask key ={task.id} text={task.text} completed={task.completed} />);
//     return (
//         <main>
//             <div className="mainContent">
//                 <h1>React tutorial</h1>
//                 <h2>A to-do list</h2>
//                 <div id="2" className = "todo">
//                     {/* { task.forEach(item => item) } */}
//                     {task[0]}{task[1]}{task[2]}{task[3]}{task[4]}
//                 </div>
//             </div>
//             <Contacts />
//             <Jokes />
//         </main>
//     );
// };

export default Main;