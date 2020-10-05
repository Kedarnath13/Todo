import React, { Component } from "react";
import AddTodo from "./AddTodo";
import BaseTodo from "./BaseTodo";

export default class TodoComponent extends Component {
  state = {
    inputWork: "",
    todo: [{ id: 1, work: "No work now", status: false }],
  };
  flipState = (id) => {
    console.log("id ");
    let newTodo = this.state.todo.map((work) => {
      if (work.id === id) {
        let newWork = { ...work, status: !work.status };
        return newWork;
      }
      return work;
    });
    console.log("State flipped");
    this.setState({ ...this.state, todo: newTodo });
  };
  deleteWork = (id) => {
    var newTodo = this.state.todo.filter((item) => id !== item.id);
    console.log(newTodo);
    this.setState({
      ...this.state,
      todo: newTodo,
    });
  };
  setInputWork = (event) => {
    let value = event.target.value;

    event.preventDefault();
    let newState = {
      ...this.state,
      todo: [...this.state.todo],
      inputWork: value,
    };
    console.log("Hello" + newState.inputWork);
    this.setState(newState);
  };
  getIndex = () => {
    let maxVal = this.state.todo.reduce((maxIndex, work) => {
      if (maxIndex < work.id) {
        maxIndex = work.id;
      }
      return maxIndex;
    }, 0);
    console.log("maxIndex" + maxVal);
    return maxVal;
  };
  addTodo = () => {
    let index = this.getIndex();
    let workState = {
      ...this.state,
      todo: [
        ...this.state.todo,
        {
          id: ++index,
          work: this.state.inputWork,
          state: false,
        },
      ],
      inputWork: "",
    };
    this.setState(workState);
  };
  render() {
    return (
      <div className="todoContainer">
        <div className="title">
          <h3>My Todo</h3>
        </div>
        <AddTodo
          inputWork={this.state.inputWork}
          addTodo={this.addTodo}
          setInputWork={this.setInputWork}
        />
        {this.state.todo.map((work) => (
          <BaseTodo
            key={work.id}
            work_data={work}
            flipState={this.flipState}
            deleteWork={this.deleteWork}
          />
        ))}
      </div>
    );
  }
}
