import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, getAllTodos } from './_todoActions';

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === 'Escape') {
      props.handleClear();
    }
  }

  componentWillMount() {
    this.props.getAllTodos();
  }

  render() {
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
            onClick={this.props.handleAdd} />
          <IconButton 
            style="info" 
            icon="search"
            onClick={this.props.handleSearch} />
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
  return bindActionCreators({ changeDescription, getAllTodos }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);