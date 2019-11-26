import React from 'react';

import Header from '../../components/Header';
import Stage from './Stage';
import { Container } from './styles';

export default function game() {
  const items = [
    { id: 1, color: '#5461ab', status: true },
    { id: 2, color: '#5461ab', status: false },
    { id: 3, color: '#5461ab', status: false },
    { id: 4, color: '#5461ab', status: false },
    { id: 5, color: '#5461ab', status: false },
    { id: 6, color: '#5461ab', status: false },
  ];
  return (
    <Container>
      <Header />
      <table>
        {items.map(item => (
          <ul>
            <Stage id={item.id} color={item.color} status={item.status} />
          </ul>
        ))}
      </table>
    </Container>
  );
}
