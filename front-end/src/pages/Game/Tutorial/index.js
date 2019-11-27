import React from 'react';
import Header from '../../../components/Header';

import { Container } from './styles';
import history from '../../../services/history';

export default function Tutorial({ content }) {
  function handleQuestion(){
    history.push('/question/1')
  }

  return (
    <Container>
      <Header />
      <div>
        <div>
          <span>Tutorial</span>
          <p>
            Curabitur eu nisl sem. Nullam ultricies, nisl et viverra pulvinar,
            augue massa gravida leo, eu tempor arcu quam vel lectus. In hac
            habitasse platea dictumst. Nunc metus neque, iaculis id tempor nec,
            rutrum sit amet augue. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Donec ut massa dictum, tincidunt erat ut,
            interdum dolor. Fusce imperdiet nisl lectus, et congue eros pretium
            sed. Aliquam erat volutpat. In sapien urna, feugiat id purus ut,
            sollicitudin tempus arcu. Pellentesque eu erat lacinia, luctus orci
            a, maximus ante. Aenean dignissim interdum diam ac cursus. Donec
            interdum ipsum sed pulvinar aliquet. In vitae orci vitae libero
            lacinia viverra. Vestibulum hendrerit cursus consequat. Ut nec eros
            diam.
          </p>
          <button onClick={handleQuestion}>Start</button>
        </div>
      </div>
    </Container>
  );
}
