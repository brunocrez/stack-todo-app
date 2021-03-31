import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, getTodos, createTodo } from './_todoActions';

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    const { createTodo, getTodos, description } = this.props;
    if (e.key === 'Enter') {
      e.shiftKey ? getTodos() : createTodo(description);
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  }

  componentWillMount() {
    this.props.getTodos();
  }

  render() {
    const { createTodo, getTodos, description } = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input 
            type="text" 
            id="description"
            onKeyUp={this.handleKey}
            value={this.props.description}
            onChange={this.props.changeDescription}
            className="form-control"
            placeholder="Adicione uma tarefa"/>
        </Grid>

        <Grid cols="12 3 2">
          <IconButton 
            style="primary" 
            icon="plus"
            onClick={() => createTodo(description)} />
          <IconButton 
            style="info" 
            icon="search"
            onClick={() => getTodos()} />
          <IconButton 
            style="default" 
            icon="close"
            onClick={this.props.handleClear} />
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    description: state.todo.description
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeDescription, getTodos, createTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);