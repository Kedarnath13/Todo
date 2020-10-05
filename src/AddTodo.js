import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <div className="add_todo">
        <div className="input_div">
          <input
            type="text"
            value={this.props.inputWork}
            placeholder="Click here to Enter Todo"
            className="input_text"
            onChange={(event) => this.props.setInputWork(event)}
          ></input>
          <button className="add_button" onClick={this.props.addTodo}>
            <i className="fa fa-plus add_icon"></i>
          </button>
        </div>
      </div>
    );
  }
}
