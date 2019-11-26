import React from 'react';
import Header from '../../../components/Header';

import { Container } from './styles';

export default function Question({ content }) {
  return (
    <Container>
      <Header />
      <div>
        <div>
          <span>Question?</span>
          <p>
            Curabitur eu nisl sem. Nullam ultricies, nisl et viverra pulvinar,
            augue massa gravida leo, eu tempor arcu quam vel lectus. In hac
            habitasse platea dictumst. Nunc metus neque, iaculis id tempor nec?
          </p>
          <button>Resposta 1</button>
          <button>Resposta 2</button>
          <button>Resposta 3</button>
          <button>Resposta 4</button>
          <button>Resposta 5</button>
        </div>
      </div>
    </Container>
  );
}
