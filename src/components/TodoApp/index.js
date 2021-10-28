import React, { Component } from "react";
import "../../styles/todo.css";
import CreateTask from "../pop-up/createTask";
import Card from "../card/Card";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Header from "../header";
class TodoHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      taskList: [],
    };
  }
  onSave = (taskobj) => {
    const temp = this.state.taskList;
    temp.push(taskobj);
    localStorage.setItem("taskList", JSON.stringify(temp));
    this.setState({
      taskList: temp,
    });
    this.setState({
      isOpen: false,
    });
  };
  handleClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  updateListArray = (obj, index) => {
    let tempList = this.state.taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    this.setState({
      taskList: tempList,
    });
    window.location.reload();
  };
  componentDidMount() {
    const arr = localStorage.getItem("taskList");

    if (arr) {
      const obj = JSON.parse(arr);
      this.setState({
        taskList: obj,
      });
    }
  }
  deleteTask = (index) => {
    let tempList = this.state.taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    this.setState({
      taskList: tempList,
    });
    window.location.reload();
  };
  render() {
    return (
      <>
        <div>
          <Header
            onclick={() => {
              this.setState({ isOpen: true });
            }}
          />
          <CreateTask
            isOpen={this.state.isOpen}
            save={this.onSave}
            close={this.handleClose}
          />
        </div>
        <div className="task-container">
          {this.state.taskList &&
            this.state.taskList.map((list, index) => (
              <Card
                taskObj={list}
                index={index}
                deleteTask={this.deleteTask}
                updateTaskList={this.updateListArray}
              />
            ))}
        </div>
      </>
    );
  }
}

export default TodoHome;
