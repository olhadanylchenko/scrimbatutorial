import React from "react";

// class TodoTask extends Component {
//     constructor() {
//         super();
//         this.state = {};
//     };
//     render() {
//         return (
//             <form>
//             <input type="checkbox" checked={this.props.completed} onChange={() => this.props.handleTick(this.props.taskID)} />
//             <label>{this.props.text}</label><br />
//         </form>
//         )
//     };
// };

function TodoTask(props) {
    // function handleClass(element) {
    //     if (props.completed) {
    //         element.classList.add('todo:checked')
    //     } else {
    //         element.classList.delete('todo:checked')
    //     }
    // }
    const checked = {
        textDecoration: "line-through",
    }
    return (
        <form style={props.completed ? checked : null}>
            <input type="checkbox" checked={props.completed} onChange={() => props.handleTick(props.taskID)} />
            <label>{props.text}</label><br />
        </form>
    );
}

// Stuff I don't need but I'm too proud of to delete
// <input type="text" placeholder={ !props.text ? `Type stuff in` : null } />
// checked={props.completed ? `checked` : null}

export default TodoTask;