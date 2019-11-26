import React from 'react';
import history from '../../../services/history';
import { Item } from './styles';

export default function Stage({ id, color, status }) {
  function handlerTutoriais() {
    history.push(`/tutorial/${id}`);
  }

  return (
    <Item
      key={id}
      background={color}
      onClick={handlerTutoriais}
      disabled={!status}
    >
      {id}
    </Item>
  );
}
