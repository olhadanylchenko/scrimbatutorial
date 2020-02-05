import React from "react";

class TodoTask extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <form>
        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={() => this.props.handleTick(this.props.taskID)}
        />
        <label>{this.props.text}</label>
        <button
          onClick={() => this.props.handleDelete(this.props.index)}
          type="button"
        >
          x
        </button>

        <br />
      </form>
    );
  }
}

function handleClass(element) {
  this.props.completed
    ? element.classList.add("todo:checked")
    : element.classList.delete("todo:checked");
}

export default TodoTask;
