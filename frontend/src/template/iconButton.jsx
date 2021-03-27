import React from 'react';

import If from './if';

export default props => (
  <If condition={props.hide}>
    <button   
      type="button"
      title={props.tooltip}
      className={'btn btn-' + props.style}
      onClick={props.onClick}>
      <i className={'fa fa-' + props.icon}></i>
    </button>
  </If>
)