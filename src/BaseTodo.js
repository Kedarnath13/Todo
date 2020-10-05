import React, { Component } from "react";

export default class BaseTodo extends Component {
  getStateCSS = () => {
    return this.props.work_data.status ? "work work_complete" : "work";
  };
  getIconCSS = () => {
    return this.props.work_data.status
      ? "fa fa-check done_icon"
      : "fa fa-times done_icon";
  };
  render() {
    return (
      <div className="todo">
        <div className="done">
          <button
            className="done_button"
            onClick={() => this.props.flipState(this.props.work_data.id)}
          >
            <i className={this.getIconCSS()}> </i>
          </button>
          <span className="done_text">Not done </span>
        </div>
        <div className="close_todo">
          <button
            className="close_button"
            onClick={() => this.props.deleteWork(this.props.work_data.id)}
          >
            X
          </button>
        </div>
        <div className={this.getStateCSS()}>{this.props.work_data.work}</div>
      </div>
    );
  }
}
