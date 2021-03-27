import React from 'react';

import IconButton from '../template/iconButton';

export default props => {

  function renderRows() {
    const data = props.list || [];

    return data.map(item => (
      <tr key={item._id}>
        <td>{item.description}</td>
        <td>
          <IconButton
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