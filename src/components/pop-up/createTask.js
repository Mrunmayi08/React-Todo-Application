import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
} from "reactstrap";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      discription: "",
    };
  }
  handleOutSide = (e) => {
    if (this.node) {
      if (this.node.contains(e.target)) {
        return;
      }
      this.props.setState({
        isOpen: false,
      });
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      this.setState({
        task: value,
      });
    } else {
      this.setState({
        discription: value,
      });
    }
  };
  handleCreateTask = (e) => {
    e.preventDefault();
    let taskobj = {};
    taskobj["Name"] = this.state.task;
    taskobj["Discription"] = this.state.discription;
    this.props.save(taskobj);
  };

  componentDidUpdate() {
    if (this.props.isOpen) {
      document.addEventListener("click", this.handleOutSide, true);
    } else {
      document.removeEventListener("click", this.handleOutSide, false);
    }
  }
  render() {
    return (
      <div>
        <Modal isOpen={this.props.isOpen}>
          <ModalHeader>Create Task</ModalHeader>
          <ModalBody>
            <Form>
              <div className="form-group">
                <label>Task</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.task}
                  name="taskName"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Discription</label>
                <textarea
                  rows="5"
                  className="form-control"
                  value={this.state.discription}
                  name="Discription"
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleCreateTask}>
              Create
            </Button>
            <Button color="secondary" onClick={this.props.close}>
              Cancle
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CreateTask;
