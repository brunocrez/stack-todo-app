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

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);

    this.refresh();
  }

  refresh(description = '') {
    const filter = description ? `&description__regex=/${description}/i` : '';
    axios
      .get(`${API}?sort=-createdAt${filter}`)
      .then(res => this.setState({ ...this.state, description, list: res.data }));
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

  handleSearch() {
    this.refresh(this.state.description);
  }

  handleClear() {
    this.refresh();
  }

  handleRemove(item) {
    axios
      .delete(`${API}/${item._id}`)
      .then(() => this.refresh(this.state.description));
  }

  handleMarkAsDone(item) {
    axios
      .put(`${API}/${item._id}`, { ...item, done: true })
      .then(() => this.refresh(this.state.description));
  }

  handleMarkAsPending(item) {
    axios
      .put(`${API}/${item._id}`, { ...item, done: false })
      .then(() => this.refresh(this.state.description));
  }

  render() {
    return (
      <div>
        <PageHader name="Tarefas" small="Cadastro" />
        <TodoForm
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
          handleSearch={this.handleSearch}
          handleClear={this.handleClear}
          description={this.state.description} />
        <TodoList 
          list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending} />
      </div>
    )
  }
}