import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
           <TodoItem
               key={todo.id}
               text={todo.text}
           />
         ))
        }
      </ul>
    );
  }
}

export default TodoList;
