import React, { Component } from "react";

const Header = (props) => {
  return (
    <div className="header text-center">
      <h3>Todo List</h3>
      <button className="btn btn-primary mt-2" onClick={props.onclick}>
        Create task
      </button>
    </div>
  );
};

export default Header;
