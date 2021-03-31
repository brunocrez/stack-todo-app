import React from 'react';

import PageHader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default function Todo() {
  return (
    <div>
      <PageHader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </div>
  )
}