import React, { Component } from 'react';

import PageHader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';
export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}