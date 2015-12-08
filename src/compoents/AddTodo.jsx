import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var input = "";

    return (
      <div>
        <input
            id="taskName"
            type="text"
            placeholder="pls input your task"
            ref={node => input = node}
        />
        <input
            type="button"
            value="Add to List"
            onClick={(e) => {
                e.preventDefault();

                if (input.value) {
                  this.props.onClick(input.value);
                  input.value = "";
                }
              }}
        />
      </div>
    );
  }
}

export default AddTodo;
