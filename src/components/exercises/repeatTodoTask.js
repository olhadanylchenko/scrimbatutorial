import React from "react";

function TodoTask(props) {
    return (
        <form className="todo">
            <input type="checkbox" checked={props.completed} onChange={(event) => {props.handleAction(props.id)}} />
            <label>{props.text}</label>
        </form>
    )
}

export default TodoTask;