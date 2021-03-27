import React from 'react';

import IconButton from '../template/iconButton';

export default props => {

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
            onClick={() => props.handleMarkAsDone(item)}>
          </IconButton>
          <IconButton
            hide={!item.done}
            tooltip="Desfazer"
            style="warning"
            icon="undo"
            onClick={() => props.handleMarkAsPending(item)}>
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
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
}