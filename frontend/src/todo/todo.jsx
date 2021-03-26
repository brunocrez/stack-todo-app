import React, { Component } from 'react';

import PageHader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';
export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    console.log(this)
  }

  render() {
    return (
      <div>
        <PageHader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          description={this.state.description} />
        <TodoList />
      </div>
    )
  }
}