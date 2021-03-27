import React, { Component } from 'react';
import axios from 'axios';

import PageHader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const API = 'http://localhost:3003/api/todos';
export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = { description: '', list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.refresh();
  }

  refresh() {
    axios
      .get(`${API}?sort=-createdAt`)
      .then(res => this.setState({ ...this.state, description: '', list: res.data }));
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios
      .post(API, { description })
      .then(() => this.refresh());
  }

  handleRemove(item) {
    axios
      .delete(`${API}/${item._id}`)
      .then(() => this.refresh());
  }

  render() {
    return (
      <div>
        <PageHader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          description={this.state.description} />
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove} />
      </div>
    )
  }
}