import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import IconButton from '../template/iconButton';
import { setTodoDone, setTodoPending } from './_todoActions';

const TodoList = props => {

  function renderRows() {
    const data = props.list || [];

    return data.map(item => (
      <tr key={item._id}>
        <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
        <td>
          <IconButton
            hide={item.done}
            tooltip="Concluir"
            style="success"
            icon="check"
            onClick={() => props.setTodoDone(item)}>
          </IconButton>
          <IconButton
            hide={!item.done}
            tooltip="Desfazer"
            style="warning"
            icon="undo"
            onClick={() => props.setTodoPending(item)}>
          </IconButton>
          <IconButton
            tooltip="Excluir"
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(item)}>
          </IconButton>
        </td>
      </tr>
    ));
  }
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}

function mapStateToProps(state) {
  return {
    list: state.todo.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setTodoDone, setTodoPending }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);