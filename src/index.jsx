import React, { Component } from 'react';
import { render } from 'react-dom';

import Header from './compoents/Header';
import AddTodo from './compoents/AddTodo';
import TodoList from './compoents/TodoList';

let todoId = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }
    this.addTodoCliked = this.addTodoCliked.bind(this);
  }

  addTodoCliked(text) {
    var newTodo = {
      id: todoId++,
      text: text
    };

    this.setState({
      todos: [
        ...this.state.todos,
        newTodo
      ]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <AddTodo onClick={this.addTodoCliked} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('container')
)
